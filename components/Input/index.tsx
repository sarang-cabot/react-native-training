import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface InputProps {
  placeholder: string;
}

const Input = ({placeholder}: InputProps) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor="#666161"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    backgroundColor: '#F3F3F3',
    fontFamily: 'Outfit-Bold',
    fontWeight: '700',
    fontSize: 15,
    borderRadius: 15,
    marginBottom: 12,
    paddingLeft: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3,
    elevation: 3,
  },
});

export default Input;
