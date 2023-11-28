import { VStack, Input, View, ScrollView, Text, Button, Modal, FormControl, Center, useToast } from 'native-base'
import { Titulo } from '../components/Titulo';
import { useState, useEffect } from 'react';
import { todasMetodologias } from '../servicos/todasMetodologias';
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { TEMAS } from '../estilos/temas';
import { novaMetodologia } from '../servicos/novaMetodologia';
import { revisarMetodologia } from '../servicos/revisarMetodologia';
import { SafeAreaView } from 'react-native'
import Cabecalho from "../components/Cabecalho";
import { Botao } from '../components/Botao';

export default function Metodologia({ navigation, route }) {
    const [metodologias, setMetodologias] = useState([])
    const [novaMetologia, setNovaMetodologia] = useState(String)
    const [showModal, setShowModal] = useState(false);
    const toast = useToast();

    async function getMetodologias() {
        const resultado = await todasMetodologias(route.params.result.email);
        if (resultado) {
            setMetodologias(resultado.result)
        }
    }

    async function postMetodologia() {
        const resultado = await novaMetodologia(route.params.result.email, novaMetologia)
        if (Number(resultado) > 0) {
            getMetodologias()
            toast.show({
                title: "Sucesso!",
                description: "Metodologia cadastrado!",
                backgroundColor: 'green.500'
            })
        } else {
            toast.show({
                title: "Erro!",
                description: "Falha ao cadastrar!",
                backgroundColor: 'red.500'
            })
        }
    }

    async function revisar(met) {
        const resultado = await revisarMetodologia(met)
        console.log(resultado)
        if (resultado.error == "") {
            getMetodologias()
            toast.show({
                title: "Sucesso!",
                description: "Metodologia revisada!",
                backgroundColor: 'green.500'
            })
        } else {
            toast.show({
                title: "Erro!",
                description: "Falha ao revisar Metodologia!",
                backgroundColor: 'red.500'
            })
        }
    }

    const toItens = (met) => {
        navigation.navigate('ItensMetodologias', {met: met, nome: route.params.result.nome})
    }

    const listaMetodologias = () => {
        if (!metodologias) {
            return (
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, paddingTop: 15 }}>Nenhuma Metodologia registrada!</Text>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    {metodologias.map((m, index) => {

                        return (
                            <TouchableOpacity onPress={() => toItens(m)} style={{ flex: 1, paddingTop: 15 }} key={index}>
                                <View style={styles.card2}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ paddingHorizontal: 7, color: '#fff', fontWeight: 'bold' }}>{m.nomeMetodologia}</Text>

                                        <TouchableOpacity onPress={() => { revisar(m) }} style={{ paddingHorizontal: 20 }}>
                                            {
                                                !m.revisada
                                                    ? <Feather name='square' size={24} style={{ color: '#fff' }} />
                                                    : <Feather name='check-square' size={24} style={{ color: '#fff' }} />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }}>
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontWeight: 'bold', paddingHorizontal: 7, fontSize: 15, color: '#fff' }}>{'Numero de revisões:  ' + m.numeroRevisoes}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity >
                        )
                    })}
                </View>
            )
        }
    }

    const modalMetodologia = () => {
        return (
            <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Nova Metodologia</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Nome</FormControl.Label>
                                <Input placeholder='Insira aqui o nome da Metodologia' value={novaMetologia} onChangeText={setNovaMetodologia} />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Cancelar
                                </Button>
                                <Button onPress={() => {
                                    postMetodologia();
                                    setShowModal(false);
                                }}>
                                    Adicionar
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
        )
    }

    useEffect(() => {
        getMetodologias()
    }, [])

    return (
        <SafeAreaView style={{ ...styles.body }}>
            <Cabecalho style={styles.Cabecalho} styleText={styles.CabecalhoText} title={'Method Control'} subtitle={route.params.result.nome} />
            <ScrollView flex={1}>
                <VStack flex={1} alignItems="center" p={3} >
                    <Titulo>Metodologias</Titulo>
                    {
                        listaMetodologias()
                    }
                </VStack>
                <Botao alignSelf='center' onPress={() => setShowModal(true)} w='60%'>Nova Metodologia</Botao>
                {
                    modalMetodologia()
                }
            </ScrollView >
        </SafeAreaView>
    );
}


