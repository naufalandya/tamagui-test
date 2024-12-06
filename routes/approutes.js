// AppRoutes.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../views/pages/home/HomePage';
import LoginPage from '../views/pages/login/LoginPage';

const Stack = createStackNavigator();

const AppRoutes = () => {
  const token = 'DCzkkOmMFgGcPIPHmRhUKCvsFyspaCoF'; // Replace with actual token retrieval logic

  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        options={{ headerShown: false }}
        children={() => (
          <HomePage
            locations={[]} // Default empty list for locations
            iconSummariesData={[]} // Default empty list for icon summaries
            token={token} // Pass the token here
          />
        )}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      {/* Add other routes here */}
    </Stack.Navigator>
  );
};

export default AppRoutes;
