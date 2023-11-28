import { Box } from "native-base";
import { Botao } from "../components/Botao";
import Cabecalho from "../components/Cabecalho";
import styles from "./styles";
import { SafeAreaView } from 'react-native'
import { geraPDF } from "../utils/geraPDF";

export default function Principal({ navigation, route }) {

  console.log(route.params)
  return (
    <SafeAreaView style={{...styles.body}}>
      <Cabecalho style={styles.Cabecalho} styleText={styles.CabecalhoText} title={'Method Control'} subtitle={route.params.result.nome} />
      <Box w='100%' flex={1} alignItems="center" mt={100}>
        <Botao onPress={() => navigation.navigate('Metodologia', route.params)} w='60%'>Metodologias</Botao>
        <Botao onPress={() => geraPDF(route.params.result)} w='60%' mt={10}>Relatório de Metodologias</Botao>
      </Box>
    </SafeAreaView>
  );
}

