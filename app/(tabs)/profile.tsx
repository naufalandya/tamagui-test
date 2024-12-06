// import React, { useState, useEffect } from 'react';
// import { Alert, Text, View, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Button, Input, YStack, XStack, Stack } from 'tamagui';
// import DisplayImage from './components/DisplayImage'; // Replace with actual component
// import EditImagePage from './EditImagePage';
// import EditNamePage from './EditNamePage';
// import EditPhonePage from './EditPhonePage';
// import EditEmailPage from './EditEmailPage';
// import LoginPage from '/tamagui-test/app/login_page';
// import UserData from './data/UserData'; // Replace with actual data source

// const ProfilePage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigation = useNavigation();

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = () => {
//     // Replace with actual login logic, e.g., check token or local storage
//     const loggedIn = UserData.isLoggedIn(); // Simulated login check
//     setIsLoggedIn(loggedIn);
//   };

//   const handleLoginRedirect = () => {
//     navigation.navigate('LoginPage'); // Redirect to LoginPage
//   };

//   const handleEditNavigation = (editPage) => {
//     navigation.navigate(editPage, {
//       onGoBack: () => checkLoginStatus(),
//     });
//   };

//   useEffect(() => {
//     if (!isLoggedIn) {
//       Alert.alert(
//         'Pemberitahuan',
//         'Anda belum login, silahkan login.',
//         [
//           {
//             text: 'OK',
//             onPress: handleLoginRedirect,
//           },
//         ]
//       );
//     }
//   }, [isLoggedIn]);

//   if (!isLoggedIn) {
//     return null; // Return nothing while login prompt is being shown
//   }

//   const user = UserData.myUser;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>
//       <DisplayImage
//         imagePath={user.image}
//         onPress={() => handleEditNavigation('EditImagePage')}
//       />
//       {buildUserInfoDisplay(user.name, 'Name', 'EditNamePage')}
//       {buildUserInfoDisplay(user.phone, 'Phone', 'EditPhonePage')}
//       {buildUserInfoDisplay(user.email, 'Email', 'EditEmailPage')}
//     </View>
//   );

//   function buildUserInfoDisplay(value, title, editPage) {
//     return (
//       <Stack marginVertical={10}>
//         <Text style={styles.label}>{title}</Text>
//         <XStack
//           alignItems="center"
//           justifyContent="space-between"
//           borderBottomWidth={1}
//           borderColor="gray"
//           paddingVertical={10}
//         >
//           <Button
//             onPress={() => handleEditNavigation(editPage)}
//             variant="unstyled"
//           >
//             <Text style={styles.valueText}>{value}</Text>
//           </Button>
//           <Text style={styles.arrowIcon}>▶</Text>
//         </XStack>
//       </Stack>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '700',
//     color: 'rgb(64, 105, 225)',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: 'gray',
//   },
//   valueText: {
//     fontSize: 16,
//     lineHeight: 20,
//   },
//   arrowIcon: {
//     fontSize: 20,
//     color: 'gray',
//   },
// });

// export default ProfilePage;