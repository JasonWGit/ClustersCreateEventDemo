import { Stack, Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  // return <Tabs />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="createEvent" />
    </Stack>
  );
}
