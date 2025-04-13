import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { buttonStyles } from '../../styles/buttonStyles';
import { createEventFormStyles } from '../../styles/createEventFormStyles';


export default function Settings() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [host, setHost] = useState('');
  const [price, setPrice] = useState('');
  
  const handleSubmit = () => {
    
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={() => router.back()}
        style={buttonStyles.backButton}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Back</Text>
      </Pressable>

      
      <Text style={createEventFormStyles.createEventFormHeader}>Create an Event</Text>

      <View style={createEventFormStyles.inputContainer}>
        <Text style={createEventFormStyles.inputLabel}>Name</Text>
        <TextInput 
          style={createEventFormStyles.formInput}
          onChangeText={setName}
        >
        </TextInput>
      </View>
      <View style={createEventFormStyles.inputContainer}>
        <Text style={createEventFormStyles.inputLabel}>Location</Text>
        <TextInput 
          style={createEventFormStyles.formInput}
          onChangeText={setLocation}>
            
        </TextInput>
      </View>
      <View style={createEventFormStyles.inputContainer}>
        <Text style={createEventFormStyles.inputLabel}>Time</Text>
        <TextInput 
          style={createEventFormStyles.formInput}
          onChangeText={setTime}>
        </TextInput>
      </View>
      <View style={createEventFormStyles.inputContainer}>
        <Text style={createEventFormStyles.inputLabel}>Host</Text>
        <TextInput 
          style={createEventFormStyles.formInput}
          onChangeText={setHost}>
        </TextInput>
      </View>
      <View style={createEventFormStyles.inputContainer}>
        <Text style={createEventFormStyles.inputLabel}>Price</Text>
        <TextInput 
          style={createEventFormStyles.formInput}
          onChangeText={setPrice}>
        </TextInput>
      </View>
      <View style={createEventFormStyles.inputContainer}>
        <Text style={createEventFormStyles.inputLabel}>Description</Text>
        <TextInput 
          style={createEventFormStyles.formInput}
          onChangeText={setDescription}>
        </TextInput>
      </View>
      
      <Pressable style={buttonStyles.submitButton} onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>
      

    </View>
  );
}
