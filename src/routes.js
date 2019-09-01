import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
import Organizations from '~/pages/Organizatios';
import {colors} from '~/styles';
//se usuario tiver logado o arquivo de rotas inicial e o repositorios
// senão e o welcome

const Routes = (userloged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organizations,
          },
          {
            tabBarOptions: {
              showIcons: true,
              showLabel: true,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whitetransparent,
              style: {
                backgroundColor: colors.secundary,
              },
            },
          },
        ),
      },
      {
        initialRouteName: userloged ? 'User' : 'Welcome',
      },
    ),
  );

export default Routes;
