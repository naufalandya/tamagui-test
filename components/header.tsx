// components/Header.tsx
import React from 'react';
import { View } from 'react-native';
import { H1, XStack } from 'tamagui';
import Button from './button';

type HeaderProps = {
  title: string;
  onActionPress?: () => void;
  actionLabel?: string;
};

const Header: React.FC<HeaderProps> = ({ title, onActionPress, actionLabel }) => {
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
