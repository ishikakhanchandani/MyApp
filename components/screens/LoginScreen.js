import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import secureStore from 'rn-secure-storage';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (email && password) {
      await AsyncStorage.setItem('email', email);
      await secureStore.setItem('password', password);
      navigation.navigate('Home');
    } else {
      alert('Please fill in both email and password');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={styles.inputContainer}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.toggleButton}
        >
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={{color: 'white', fontSize: 20}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    marginTop: 200,
    borderRadius: 6,
    borderColor: 'teal',
    padding: 10
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 6,
    borderColor: 'teal',
    padding: 10
  },
  passwordInput: {
    flex: 1,
    height: 50  ,
    paddingRight: 30 
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  loginButton: {
    backgroundColor: 'teal',
    width: '30%',
    height: 50,
    borderRadius: 4,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
