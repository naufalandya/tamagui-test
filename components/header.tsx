// components/Header.js
import React from 'react';
import { View, Text } from 'react-native';
import { H1, XStack } from 'tamagui';
import Button from './button';

const Header = ({ title, onActionPress, actionLabel }) => {
    return (
        <XStack
            justifyContent="space-between"
            alignItems="center"
            padding="$4"
            backgroundColor="$background"
        >
            <H1>{title}</H1>
            {actionLabel && onActionPress && (
                <Button label={actionLabel} onPress={onActionPress} />
            )}
        </XStack>
    );
};

export default Header;
