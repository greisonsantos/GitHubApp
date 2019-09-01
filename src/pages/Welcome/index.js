import React from 'react';

import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import styles from './styles';

console.tron.log('bem vindo teste ');
const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="black" />

    <Text style={styles.title}> Bem vindo !!</Text>
    <Text style={styles.text}>
      Para continuar Precisamos que você informe seu User do GItHub
    </Text>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu Usuário"
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
