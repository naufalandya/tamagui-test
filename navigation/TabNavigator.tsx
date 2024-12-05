import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { View, Text, Button, ListItem, Stack, YStack, BottomBar } from 'tamagui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '/tamagui-test/app/(tabs)/homepage';
import TestPage2 from '/tamagui-test/app/(tabs)/testpage2';
import ProfilePage from '/tamagui-test/app/(tabs)/profile';
import ApiService from '/tamagui-test/api/ApiService'; // Replace with actual API service

const Tab = createBottomTabNavigator();

const DefaultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [locationData, setLocationData] = useState([]);
  const [iconSummariesData, setIconSummariesData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const apiService = new ApiService();

  useEffect(() => {
    const loadData = async () => {
      try {
        const locations = await apiService.fetchLocation();
        const iconSummaries = await apiService.fetchIconSummariesData();
        setLocationData(locations);
        setIconSummariesData(iconSummaries);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const MoreSection = () => (
    <YStack>
      <ListItem
        title="ESG"
        icon={<Text>🌿</Text>}
        onPress={() => setIsExpanded(!isExpanded)}
      />
      <ListItem
        title="Project Details"
        icon={<Text>📋</Text>}
        onPress={() => {
          setIsExpanded(false);
          // Navigation logic for TestPage3
        }}
      />
      <ListItem
        title="Option 2"
        icon={<Text>📑</Text>}
        onPress={() => setIsExpanded(false)}
      />
    </YStack>
  );

  if (isLoading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#16718A" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#16718A' },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#A8A8A8',
        }}
      >
        <Tab.Screen
          name="Home"
          options={{ tabBarIcon: () => <Text>🏠</Text> }}
        >
          {() => (
            <HomePage
              locations={locationData}
              iconSummariesData={iconSummariesData}
              token="Replace with actual token"
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Projects"
          options={{ tabBarIcon: () => <Text>📄</Text> }}
        >
          {() => <TestPage2 locations={locationData} />}
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          options={{ tabBarIcon: () => <Text>👤</Text> }}
        >
          {ProfilePage}
        </Tab.Screen>
        <Tab.Screen
          name="More"
          options={{ tabBarIcon: () => <Text>☰</Text> }}
        >
          {() => (isExpanded ? <MoreSection /> : <View />)}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DefaultPage;
