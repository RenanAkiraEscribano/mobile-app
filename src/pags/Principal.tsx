import { Box } from "native-base";
import { Botao } from "../components/Botao";
import { useNavigation } from '@react-navigation/native';
import { RoutesHomeTypes } from "../routes/RoutesHome";

export default function Principal() {

  const navigation = useNavigation<RoutesHomeTypes>();

  return (
    <Box w='100%' flex={1} alignItems="center" justifyContent='center'>
      <Botao onPress={() => navigation.navigate('Cadastro')} w='60%'>Cadastro Metodologia</Botao>
      <Botao w='60%'>Editar Metodologia</Botao>
      <Botao w='60%'>Relatório de Metodologias</Botao>
    </Box>
  );
}

