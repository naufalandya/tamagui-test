import React, { useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { View, Text, Input, Button, Stack, YStack } from 'tamagui';

const LoginPage = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleLogin = async () => {
    setIsLoading(true);

    // Simulate login API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);

    // Example: Navigate or handle login success
    console.log('Logged in with:', { username, password });
    alert('Login successful!');
  };

  return (
    <View
      flex={1}
      backgroundColor="#90CAF9"
      justifyContent="center"
      alignItems="center"
    >
      <YStack
        width={350}
        padding="$4"
        backgroundColor="white"
        borderRadius="$4"
        shadowColor="rgba(0,0,0,0.26)"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.8}
        shadowRadius={10}
      >
        {/* Logo */}
        <Image
          source={require('./assets/plnnr-bg.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
          resizeMode="contain"
        />

        {/* Sign In Text */}
        <Text
          fontSize={20}
          fontWeight="bold"
          color="#16718A"
          textAlign="center"
          marginBottom="$2"
        >
          Sign In
        </Text>
        <Text
          fontSize={16}
          color="gray"
          textAlign="center"
          marginBottom="$4"
        >
          Enter your credentials to access your account
        </Text>

        {/* Input Fields */}
        <Stack
          flexDirection="row"
          alignItems="center"
          marginBottom="$4"
          borderWidth={1}
          borderColor="gray"
          borderRadius="$2"
          paddingHorizontal="$2"
        >
          <Text>📧</Text>
          <Input
            placeholder="Email address"
            flex={1}
            onChangeText={setUsername}
            value={username}
          />
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="center"
          marginBottom="$4"
          borderWidth={1}
          borderColor="gray"
          borderRadius="$2"
          paddingHorizontal="$2"
        >
          <Text>🔒</Text>
          <Input
            placeholder="Password"
            flex={1}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </Stack>

        {/* Login Button */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#16718A" />
        ) : (
          <Button
            backgroundColor="#16718A"
            color="white"
            onPress={handleLogin}
          >
            Login
          </Button>
        )}
      </YStack>
    </View>
  );
};

export default LoginPage;
