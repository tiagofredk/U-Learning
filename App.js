import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MainContextProvider } from './src/context/MainContext';
import StackNavigator from './src/StackNavigator';

export default function App() {
  
  return (
    <NavigationContainer>
      <MainContextProvider>
         <StackNavigator/>
         <StatusBar style="dark"/>
      </MainContextProvider>
    </NavigationContainer>
  );
}

