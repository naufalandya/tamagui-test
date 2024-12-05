import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Buat konteks untuk Login
const LoginContext = createContext();

// Provider untuk Login Context
export const LoginProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  // Fungsi untuk login
  const login = async (username, password) => {
    setIsLoading(true);

    // Simulasikan proses login
    setTimeout(() => {
      setIsLoading(false);

      // Validasi web API (contoh placeholder)
      if (username === 'user' && password === 'password') {
        // Jika berhasil, arahkan ke halaman default
        navigation.reset({
          index: 0,
          routes: [{ name: 'DefaultPage' }],
        });
      } else {
        // Tampilkan pesan error jika login gagal
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    }, 2000);
  };

  return (
    <LoginContext.Provider value={{ isLoading, login }}>
      {children}
    </LoginContext.Provider>
  );
};

// Hook untuk menggunakan LoginContext
export const useLogin = () => useContext(LoginContext);
