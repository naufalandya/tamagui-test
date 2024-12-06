import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Tipe data untuk proyek
type Project = {
  name: string;
  description: string;
  deadline: string;
  image?: string;
  status?: string;
};

// Tipe untuk navigasi
type RootStackParamList = {
  ProjectDetailPage: { project: Project };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ProjectDetailPage'>;

const ProjectDetailPage: React.FC<Props> = ({ route, navigation }) => {
  const { project } = route.params;

  // Fungsi untuk tombol aksi
  const handleEdit = () => {
    Alert.alert('Edit Project', `Edit project: ${project.name}`);
  };

  const handleDelete = () => {
    Alert.alert('Delete Project', `Are you sure you want to delete ${project.name}?`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{project.name}</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Gambar Proyek */}
        {project.image && (
          <Image source={{ uri: project.image }} style={styles.image} />
        )}

        {/* Detail Proyek */}
        <Text style={styles.milestone}>Milestone: {project.name}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <Text style={styles.deadline}>Deadline: {project.deadline}</Text>
        <Text style={styles.status}>Status: {project.status || 'Unknown'}</Text>

        {/* Tombol Aksi */}
        <View style={styles.buttonContainer}>
          <Button title="Edit" onPress={handleEdit} />
          <View style={styles.buttonSpacing} />
          <Button title="Delete" color="red" onPress={handleDelete} />
        </View>
      </View>
    </View>
  );
};

// Gaya tampilan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 8,
  },
  milestone: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  deadline: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  status: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  buttonSpacing: {
    width: 16,
  },
});

export default ProjectDetailPage;
