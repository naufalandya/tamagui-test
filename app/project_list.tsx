import ProjectCard from '/tamagui-test/components/ProjectCard'; // Adjust path as needed
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Project = {
  id: number;
  name: string;
  description: string;
  deadline: string;
};

const projectsList: Project[] = [
  { id: 1, name: 'Project A', description: 'Status: Construction', deadline: '2024-12-31' },
  { id: 2, name: 'Project B', description: 'Status: Budgeting', deadline: '2024-11-30' },
  { id: 3, name: 'Project C', description: 'Status: Legal Review', deadline: '2024-10-15' },
  { id: 4, name: 'Project D', description: 'Status: Commissioning', deadline: '2024-09-01' },
];

const ProjectListPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const statuses = ['All', 'Construction', 'Budgeting', 'Legal Review', 'Commissioning'];

  const getFilteredProjects = (status: string): Project[] => {
    if (status === 'All') {
      return projectsList;
    }
    return projectsList.filter((project) => {
      const projectStatus = project.description.split(': ').pop();
      return projectStatus === status;
    });
  };

  const filteredProjects = getFilteredProjects(selectedStatus);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter by status:</Text>
        <Picker
          selectedValue={selectedStatus}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedStatus(itemValue)}
        >
          {statuses.map((status) => (
            <Picker.Item key={status} label={status} value={status} />
          ))}
        </Picker>
      </View>

      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProjectCard project={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  filterText: {
    fontSize: 16,
  },
  picker: {
    height: 50,
    flex: 1,
  },
});

export default ProjectListPage;