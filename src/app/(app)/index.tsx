import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { buttonStyles } from '../../styles/buttonStyles';

export default function App() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      

      
      <Text>Welcome to your clean Obytes Starter app!</Text>
      <Pressable style={buttonStyles.createEventButton} onPress={
        () => router.push("/createEvent")
      }>
        <Text>Create Event</Text>
      </Pressable>
      
    </View>
  );
}
