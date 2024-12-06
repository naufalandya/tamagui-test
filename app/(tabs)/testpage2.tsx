import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Card, ListItem, Button } from 'tamagui';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Location = {
  nameproject: string; // Nama proyek
  title: string;       // Judul proyek
};

type ProjectsProps = {
  locations: Location[]; // Daftar lokasi
};

const Projects: React.FC<ProjectsProps> = ({ locations }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const renderProjectCard = ({ item }: { item: Location }) => (
    <ProjectCardDetails
      projectName={item.nameproject}
      titleName={item.title}
      onNavigate={() => navigation.navigate('Projects')} // Ganti 'Projects' dengan rute yang benar
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderProjectCard}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No projects available.
          </Text>
        }
      />
    </View>
  );
};

type ProjectCardDetailsProps = {
  projectName: string; // Nama proyek
  titleName: string;   // Judul proyek
  onNavigate: () => void; // Fungsi navigasi
};

const ProjectCardDetails: React.FC<ProjectCardDetailsProps> = ({
  projectName,
  titleName,
  onNavigate,
}) => {
  const showDetailsDialog = () => {
    Alert.alert(
      'Details Project Menu',
      'Choose Menu',
      [
        {
          text: 'Project Details',
          onPress: onNavigate,
        },
        {
          text: 'Project Milestones',
          onPress: () =>
            Alert.alert('Milestones', 'Navigate to Project Milestones'),
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <Card bordered elevate style={{ margin: 10, backgroundColor: '#16718A' }}>
      <ListItem
        icon={<MaterialIcons name="access-alarm" size={24} color="#FFF" />}
        title={<Text style={{ color: '#FFF' }}>{projectName}</Text>}
        subTitle={<Text style={{ color: '#FFF' }}>{titleName}</Text>}
        //       
        
      />
    <Button
            size="$2"
            chromeless
            onPress={showDetailsDialog}
            icon={<MaterialIcons name="more-horiz" size={24} color="#2789A9" />}
    />
    </Card>
  );
};

export default Projects;
