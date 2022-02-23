import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Tabnavigator from './src/components/navigation/Tabnavigator';
import { MainContextProvider } from './src/context/MainContext';
// import StackNavigator from './src/StackNavigator';



export default function App() {
  
  return (
    <NavigationContainer>
      <MainContextProvider>
        <Tabnavigator/>        
        <StatusBar style="dark" />
      </MainContextProvider>
    </NavigationContainer>
  );
}

