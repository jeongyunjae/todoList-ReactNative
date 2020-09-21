import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import DetailTodo from '../screens/DetailTodo';
import AddTodo from '../screens/AddTodo';

const StackNavigator = createStackNavigator(
  {
    Home,
    DetailTodo,
    AddTodo,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
