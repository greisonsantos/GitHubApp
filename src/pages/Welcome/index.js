import React, {Component} from 'react';
import asyncStorage from '@react-native-community/async-storage';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles';

import api from '~/services/api';

export default class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);
    console.tron.log(user);
    return user;
  };

  saveUser = async username => {
    await asyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;

    this.setState({loading: true});

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      this.setState({loading: false, error: true});
    }
  };

  render() {
    const {username, loading, error} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />

        <Text style={styles.title}> Bem vindo !!</Text>
        <Text style={styles.text}>
          Para continuar Precisamos que você informe seu User do GItHub
        </Text>

        {error && <Text style={styles.error}>Usuário não encontrado</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu Usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({username: text})}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}> Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
