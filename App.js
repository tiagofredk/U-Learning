import { NavigationContainer } from '@react-navigation/native';
import MainPage from './src/components/landing_page/MainPage';
import { MainContextProvider } from './src/context/MainContext';

export default function App() {
  
  return (
    <NavigationContainer>
      <MainContextProvider>
         <MainPage/>
      </MainContextProvider>
    </NavigationContainer>
  );
}

