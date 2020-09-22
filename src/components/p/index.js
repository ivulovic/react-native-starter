import React from 'react';
import { Text } from 'react-native';
import variables from 'styles/variables';

export default function P({ children }) {
  const theme = 'light';
  const colors = variables[theme];
  return <Text style={{ color: colors.text }}>
    {children}
  </Text>
}