import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../Home';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

const AppRoutes = () => {
  <Stack.Navigator>
    <Stack.Screen name="Home" component={TabRoutes} />
  </Stack.Navigator>
}

export default AppRoutes;