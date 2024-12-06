import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation parameters
type RootStackParamList = {
  ProjectDetailPage: { project: Project };
};

// Type definition for project props
type Project = {
  id: number;
  name: string;
  description: string;
  deadline: string;
};

type ProjectCardProps = {
  project: Project;
};

// Type the navigation prop
type NavigationProps = StackNavigationProp<RootStackParamList, 'ProjectDetailPage'>;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigation = useNavigation<NavigationProps>();

  const navigateToDetails = () => {
    navigation.navigate('ProjectDetailPage', { project });
  };

  return (
    <TouchableOpacity onPress={navigateToDetails} style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.projectName}>{project.name}</Text>
        <Text style={styles.projectDescription}>{project.description}</Text>
        <Text style={styles.projectDeadline}>Deadline: {project.deadline}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  projectName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  projectDeadline: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ProjectCard;
