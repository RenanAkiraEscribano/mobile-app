import { NativeBaseProvider } from 'native-base'
import { TEMAS } from './src/estilos/temas';
import RoutesHome from './src/routes/Routes';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar/>
      <RoutesHome/>
    </NativeBaseProvider>
  );
}

