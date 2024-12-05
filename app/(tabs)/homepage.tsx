import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import MapView, { Marker } from 'react-native-maps';
import { Stack } from '@tamagui/core';

// Define types for locations and dashboard data
type Location = {
  lat: number;
  lng: number;
  title: string;
  type: string;
};

type DashboardData = {
  totalInvest: string;
  totalCapacity: string;
  totalProduction: string;
  esgRating: string;
  capacityByType: any[];
};

const fetchDashboardData = async (): Promise<DashboardData | null> => {
  try {
    const response = await fetch('https://imost.ptplnnr.com/api/dashboard');
    return await response.json();
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return null;
  }
};

const HomePage = ({ locations }: { locations: Location[] }) => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDashboardData();
      setDashboardData(data);
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#16718A" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Stack space>
        <InfoCard title="Total Nilai Investasi" subtitle={`Rp ${dashboardData?.totalInvest}`} />
        <InfoCard title="Total Kapasitas Pembangkit" subtitle={`${dashboardData?.totalCapacity} MW`} />
        <InfoCard title="Total Produksi Listrik" subtitle={`${dashboardData?.totalProduction} GWh`} />
      </Stack>
      <Stack style={styles.chartContainer}>
        <Text>Kapasitas Per Jenis Pembangkit</Text>
        <PieChart
          data={dashboardData?.capacityByType || []}
          width={300}
          height={220}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
          chartConfig={chartConfig}
        />
      </Stack>
      <Text style={styles.mapTitle}>Project Locations Map</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -2.5489,
          longitude: 118.0149,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: location.lat, longitude: location.lng }}
            title={location.title}
            description={location.type}
          />
        ))}
      </MapView>
    </ScrollView>
  );
};

const InfoCard = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <Stack space style={styles.infoCard}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
  </Stack>
);

const DefaultPage = () => {
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch('https://imost.ptplnnr.com/api/dashboard');
        const data = await response.json();
        setLocationData(data.powerPlants || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocationData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#16718A" />
      </View>
    );
  }

  return <HomePage locations={locationData} />;
};

const chartConfig = {
  backgroundGradientFrom: '#16718A',
  backgroundGradientTo: '#16718A',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  infoCard: {
    padding: 15,
    backgroundColor: '#16718A',
    borderRadius: 10,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'white',
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  map: {
    width: '100%',
    height: 300,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default DefaultPage;
