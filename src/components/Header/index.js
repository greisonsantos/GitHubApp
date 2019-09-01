import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';

import styles from './styles';

//o header não esta sendo chamado nos arquivos de rotas
//logo não tem a props navigation
// porem pode se ultilizar o  withNavigation from  react-navigation

class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  //metodo para deslogar o user e redirecioanr para welcome
  signOunt = async () => {
    const {navigation} = this.props;

    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  };

  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={this.signOunt}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

//quando o componente não esta inserido no arquivo de rotas
export default withNavigation(Header);
