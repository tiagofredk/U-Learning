import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainOnboard from './src/components/Home/MainOnboard';
// import Tabnavigator from './src/components/navigation/Tabnavigator';
import { MainContextProvider } from './src/context/MainContext';
import StackNavigator from './src/components/navigation/StackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src/components/Home/MainPage';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainContextProvider>
        {/* <MainOnboard /> */}
        {/* <Tabnavigator/> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="MainOnboard2" component={MainOnboard} /> */}
          <Stack.Screen name="HomeStack" component={MainPage} />
          {/* <Stack.Screen name="LoginDecision" component={LoginDecision} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signin" component={Signin} /> */}
          {/* <Stack.Screen name="Impressum" component={Impressum}/> */}
        </Stack.Navigator>
        <StatusBar style="dark" />
      </MainContextProvider>
    </NavigationContainer>
  );
}

