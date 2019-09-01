import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import '~/config/ReactotronConfig';
import {Provider} from 'react-redux';
import store from './store';

import createNavigator from '~/routes';
console.tron.log('asdsa');

export default class App extends Component {
  state = {
    userChecked: false,
    userLoged: false,
  };

  async componentDidMount() {
    const username = AsyncStorage.getItem('@Githuber:username');

    this.setState({userChecked: true, userLoged: !!username});
  }

  render() {
    const {userChecked, userLoged} = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLoged);
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
