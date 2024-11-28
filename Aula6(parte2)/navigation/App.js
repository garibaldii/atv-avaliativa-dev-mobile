import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//atv1
import HomeScreen from './src/atv1/HomeScreen'
import DetailsScreen from './src/atv1/DetailScreen'


//atv valendoPonto
import ConsultaScreen from './src/ConsultaScreen'
import RegistroScreen from './src/RegistroScreen';
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name='Consulta' component={ConsultaScreen}/>
        
        <Stack.Screen name='Registro' component={RegistroScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 