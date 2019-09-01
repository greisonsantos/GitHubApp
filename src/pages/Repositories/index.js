import React, {Component} from 'react';

import {View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';
import styles from '~/components/Header/styles';

import {Container} from './styles';

export default class Repositories extends Component {
  state = {
    data: [],
    loading: true,
  };
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      <Icon name="list-alt" size={20} color={tintColor} />;
    },
  };

  async componentDidMount() {
    console.log('aqui');
    let username = AsyncStorage.getItem('@Githuber:username');
    username = 'greisonsantos';
    const response = await api.get(`/users/${username}/repos`);

    console.log(response);
    this.setState({data: response.data, loading: false});
  }

  renderList = () => <Text> LIsta</Text>;

  render() {
    const {loading} = this.state;
    return (
      <View>
        <Header title="Repositorios" />

        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}

        {this.state.data.map(repo => (
          <Text>{repo.name}</Text>
        ))}
      </View>
    );
  }
}
