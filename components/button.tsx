// components/Button.tsx
import React from 'react';
import { Button as TamaguiButton, Text } from 'tamagui';

// Define the props for the Button component
type ButtonProps = {
  label: string;
  onPress: () => void; // Explicitly define the type for onPress
  variant?: 'primary' | 'secondary' | 'tertiary'; // Custom variants
  badgeType?: string; // Badge text
};

// Map custom variants to Tamagui theme names
const variantToThemeMap: Record<string, string> = {
  primary: 'blue', // Replace 'blue' with the actual theme name in Tamagui
  secondary: 'green',
  tertiary: 'orange',
};

const Button: React.FC<ButtonProps> = ({ label, onPress, variant = 'primary', badgeType }) => {
  const theme = variantToThemeMap[variant] || null; // Map the custom variant to a valid Tamagui theme

  return (
    <TamaguiButton
      onPress={onPress}
      size="$4"
      theme={theme as any} // Ensure the theme value matches Tamagui's ThemeName type
      borderRadius="$4"
      paddingHorizontal="$5"
      marginVertical="$2"
    >
      {badgeType && (
        <Text
          style={{
            backgroundColor: badgeType, // Badge background color
            borderRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 2,
            fontSize: 12,
            color: 'white',
            alignSelf: 'flex-start',
            marginBottom: 4,
          }}
        >
          {badgeType}
        </Text>
      )}
      {label}
    </TamaguiButton>
  );
};

export default Button;
