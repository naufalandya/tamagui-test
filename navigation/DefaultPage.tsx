import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { View, YStack, ListItem } from 'tamagui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '/tamagui-test/app//(tabs)/homepage';
import TestPage2 from '/tamagui-test/app/(tabs)/testpage2';
import ApiService from '/tamagui-test/api/ApiService';
import { Location } from '../models/DashboardData';

// Type definitions

interface IconSummary {
  id: number;
  name: string;
  // Add other relevant properties
}

const Tab = createBottomTabNavigator();

const DefaultPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [iconSummariesData, setIconSummariesData] = useState<IconSummary[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const locations = await ApiService.fetchLocation();
        const iconSummaries = await ApiService.fetchIconSummariesData();

        const validLocations = locations.filter(
          (loc: any) => loc.lat !== undefined && loc.lng !== undefined && loc.title && loc.type
        );

        setLocationData(locationData);
        setIconSummariesData(iconSummaries);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const MoreSection: React.FC = () => (
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
          // TODO: Add navigation logic for TestPage3
        }}
      />
      <ListItem
        title="Option 2"
        icon={<Text>📑</Text>}
        onPress={() => setIsExpanded(false)}
      />
    </YStack>
  );

  // Loading state
  if (isLoading) {
    return (
      <View 
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator 
          size="large" 
          color="#16718A" 
        />
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
          headerShown: false, // Hide default header
        }}
      >
        <Tab.Screen
          name="Home"
          options={{ 
            tabBarIcon: () => <Text>🏠</Text>,
            title: 'Home'
          }}
        >
          {() => (
            <HomePage
              Location ={locationData}
              iconSummariesData={iconSummariesData}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Projects"
          options={{ 
            tabBarIcon: () => <Text>📄</Text>,
            title: 'Projects'
          }}
        >
          {() => <TestPage2 locations={locationData} />}
        </Tab.Screen>

        <Tab.Screen
          name="More"
          options={{ 
            tabBarIcon: () => <Text>☰</Text>,
            title: 'More'
          }}
        >
          {() => (
            isExpanded 
              ? <MoreSection /> 
              : (
                <View 
                  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text>No Content Available</Text>
                </View>
              )
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DefaultPage;