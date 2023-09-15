import Principal from './src/pags/Principal';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { TEMAS } from './src/estilos/temas';
import RoutesTab from './src/routes/RoutesTab';
import RoutesHome from './src/routes/RoutesHome';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <RoutesHome/>
    </NativeBaseProvider>
  );
}

