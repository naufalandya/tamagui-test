// components/Button.js
import React from 'react';
import { Button as TamaguiButton } from 'tamagui';

const Button = ({ label, onPress, variant = 'primary' }) => {
    return (
        <TamaguiButton
            onPress={onPress}
            size="$4"
            theme={variant} // Variants: "primary", "secondary", etc.
            borderRadius="$4"
            paddingHorizontal="$5"
            marginVertical="$2"
        >
            {label}
        </TamaguiButton>
    );
};

export default Button;
