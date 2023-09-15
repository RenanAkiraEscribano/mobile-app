import { VStack, Image, Box, View, ScrollView } from 'native-base'
import { Titulo } from '../components/Titulo';
import { EntradaTexto } from '../components/EntradaTexto';
import { Botao } from '../components/Botao';
import { useState } from 'react';
import { secoes } from '../utils/CadastroMetodologiaTexto';
//import Logo from './assets/img_metodologia.png'


export default function CadastroMetodologia() {

    const [numSecao, setNumSecao] = useState(0);

    function avancarSecao() {
        if (numSecao < secoes.length - 1) {
            setNumSecao(numSecao + 1)
        }
    }
    function voltarSecao() {
        if (numSecao > 0) {
            setNumSecao(numSecao - 1)
        }
    }

    return (
        <ScrollView flex={1} p={5}>
            <VStack flex={1} alignItems="center" p={5} >

                <Titulo>
                    {secoes[numSecao].titulo}
                </Titulo>
                <Box>
                    {
                        secoes[numSecao].entradaTexto.map(entrada => {
                            return (
                                <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
                            )
                        })
                    }
                </Box>
                <View style={{ flexDirection: 'row' }}>
                    {numSecao > 0 &&
                        <Botao w='40%' onPress={() => voltarSecao()} mb={10}>Voltar</Botao>
                    }
                    {numSecao < secoes.length - 1 &&
                        <Botao w='40%' onPress={() => avancarSecao()} mb={10}>Avançar</Botao>
                    }
                </View>
            </VStack>
        </ScrollView>
    );
}


