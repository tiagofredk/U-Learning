import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MainContextProvider } from './src/context/MainContext';
// import StackNavigator from './src/StackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from './src/components/Home/MainPage';
import Login from './src/components/Login/Login';
import Impressum from './src/components/Impressum/Impressum';
import Courses from './src/components/Course/Courses';
import Cart from './src/components/Cart/Cart';
import UserProfile from "./src/components/User/UserProfile"
import Signin from "./src/components/Signin/Signin"

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>

      <MainContextProvider>
        {/* <StackNavigator/> */}
        
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={MainPage} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Impressum" component={Impressum} />
          <Tab.Screen name="Courses" component={Courses} />
          <Tab.Screen name="Cart" component={Cart} />
          {/* <Tab.Screen name="Signin" component={Signin} /> */}
          <Tab.Screen name="UserProfile" component={UserProfile} />
        </Tab.Navigator>
        <StatusBar style="dark" />
      </MainContextProvider>
    </NavigationContainer>
  );
}

