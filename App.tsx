import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client'
import client from './src/lib/apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Block from './src/screens/Block';
import Transaction from './src/screens/Transaction';
import { RootStackParamList } from './src/models';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Block" component={Block} />
          <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
