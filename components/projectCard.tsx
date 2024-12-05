import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Mock data model
// Replace this with the actual project model or prop passed
const ProjectCard = ({ project }) => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('ProjectDetailPage', { project });
  };

  return (
    <TouchableOpacity onPress={navigateToDetails}>
      <View style={styles.card}>
        <Text style={styles.projectName}>{project.name}</Text>
        <Text style={styles.projectDescription}>{project.description}</Text>
        <Text style={styles.projectDeadline}>Deadline: {project.deadline}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 16,
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
