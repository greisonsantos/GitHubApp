import React from 'react';

import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';

// import { Container } from './styles';

const Organizations = () => <Header title="Organizações" />;

Organizations.navigationOptions = {
  tabBarIcon: ({tintColor}) => {
    <Icon name="building" size={20} color={tintColor} />;
  },
};
export default Organizations;
