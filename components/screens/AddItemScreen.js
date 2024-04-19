// AddItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddItemScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      const newItem = {
        title,
        description,
        id: Math.random().toString(),
      };
      navigation.navigate('Home', { newItem });
    } else {
      alert('Please fill in both title and description fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    height: 50,
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  },
});

export default AddItemScreen;
