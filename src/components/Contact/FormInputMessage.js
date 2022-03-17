import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const InputMessage = props => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        {error ? (
          <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput
      {...props}
      editable
      maxLength={350}
      placeholder={placeholder}
      style={styles.input} />
    </>
  );
};

const FormInputMessage = () => {
  const [value, onChangeText] = React.useState('Your Message');

  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <InputMessage
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 105,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default FormInputMessage;
