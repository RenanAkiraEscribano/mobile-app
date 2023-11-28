import { View, Text, ScrollView, VStack, Modal, FormControl, Center, useToast, Button, Input } from "native-base";
import { SafeAreaView } from 'react-native'
import Cabecalho from "../components/Cabecalho";
import styles from "./styles";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";
import { Feather } from '@expo/vector-icons'
import { useState, useEffect } from 'react';
import { todosItens } from "../servicos/todosItens";
import { addItem } from "../servicos/addItem";
import { editarItem } from "../servicos/editarItem";
import { TouchableOpacity } from 'react-native'
import { apagaItem } from "../servicos/apagaItem";

export default function ItensMetodologias({ route }) {

    const [itens, setItens] = useState([]);
    const [novoItem, setNovoItem] = useState({ nomeItem: '', regem: '', funcionamento: '', instrucao: '', exemplo: '', referenciasBibliograficas: '' })
    const [showModal, setShowModal] = useState(false);
    const [showModalNew, setShowModalNew] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [idItem, setIdItem] = useState(Number);
    const [indexKey, setIndexKey] = useState(Number);
    const toast = useToast();
    console.log(itens)

    async function getItens() {
        const resultado = await todosItens(route.params.met.idMetodologia);
        if (resultado) {
            setItens(resultado.result)
        }
    }

    async function postItem() {
        const resultado = await addItem(route.params.met.idMetodologia, novoItem)
        if (Number(resultado) > 0) {
            getItens()
            toast.show({
                title: "Sucesso!",
                description: "Item registrado!",
                backgroundColor: 'green.500'
            })
        } else {
            toast.show({
                title: "Erro!",
                description: "Falha ao registrar!",
                backgroundColor: 'red.500'
            })
        }
    }

    async function putItem(idItem) {
        const resultado = await editarItem(idItem, novoItem)
        if (resultado.error == "") {
            getItens()
            toast.show({
                title: "Sucesso!",
                description: "Item alterado!",
                backgroundColor: 'green.500'
            })
        } else {
            toast.show({
                title: "Erro!",
                description: "Falha ao alterar item!",
                backgroundColor: 'red.500'
            })
        }
    }

    async function deleteItem(id) {
        const resultado = await apagaItem(id)
        console.log(resultado)
        if (resultado.result.affectedRows == 1) {
            getItens()
            toast.show({
                title: "Sucesso!",
                description: "Item excluido!",
                backgroundColor: 'green.500'
            })
        } else {
            toast.show({
                title: "Erro!",
                description: "Falha ao excluir item!",
                backgroundColor: 'red.500'
            })
        }
    }

    const handlerId = (id: number) => {
        setShowModalEdit(true);
        setIdItem(id);
    }

    const handleIndex = (index: number) => {
        setShowModal(true);
        setIndexKey(index);
    }

    const listaItens = () => {
        if (itens.length == 0) {
            return (
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, paddingTop: 15 }}>Nenhum Item registrado!</Text>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    {itens.map((m, index) => {

                        return (
                            <TouchableOpacity onPress={() => handleIndex(index)} style={{ flex: 1, paddingTop: 15 }} key={index}>
                                <View style={styles.card2}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ paddingHorizontal: 7, color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{m.nomeItem}</Text>

                                        <TouchableOpacity onPress={() => { handlerId(m.idItem) }} style={{ paddingHorizontal: 20 }}>
                                            {
                                                <Feather name='edit' size={24} style={{ color: '#fff' }} />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }}>
                                    </View>
                                </View>
                            </TouchableOpacity >
                        )
                    })}
                </View>
            )
        }
    }

    const handleChange = (name, value) => {
        setNovoItem(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const modalNovoItem = () => {
        return (
            <Center>
                <Modal isOpen={showModalNew} onClose={() => setShowModalNew(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Novo Item</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Nome</FormControl.Label>
                                <Input placeholder='Insira aqui o nome do Item' value={novoItem.nomeItem} onChangeText={(value) => handleChange('nomeItem', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Regem</FormControl.Label>
                                <Input placeholder='Insira aqui o que regem' value={novoItem.regem} onChangeText={(value) => handleChange('regem', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Funcionamento</FormControl.Label>
                                <Input placeholder='Insira aqui o funcionamento' value={novoItem.funcionamento} onChangeText={(value) => handleChange('funcionamento', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Instrução</FormControl.Label>
                                <Input placeholder='Insira aqui as instruções' value={novoItem.instrucao} onChangeText={(value) => handleChange('instrucao', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Exemplo</FormControl.Label>
                                <Input placeholder='Insira aqui algum exemplo' value={novoItem.exemplo} onChangeText={(value) => handleChange('exemplo', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Referências Bibliográficas</FormControl.Label>
                                <Input placeholder='Insira aqui as referências' value={novoItem.referenciasBibliograficas} onChangeText={(value) => handleChange('referenciasBibliograficas', value)} />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModalNew(false);
                                }}>
                                    Cancelar
                                </Button>
                                <Button onPress={() => {
                                    postItem();
                                    setShowModalNew(false);
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

    const modalEditItem = () => {
        return (
            <Center>
                <Modal isOpen={showModalEdit} onClose={() => setShowModalEdit(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Alterar Item</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Nome</FormControl.Label>
                                <Input placeholder='Insira aqui o nome do Item' value={novoItem.nomeItem} onChangeText={(value) => handleChange('nomeItem', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Regem</FormControl.Label>
                                <Input placeholder='Insira aqui o que regem' value={novoItem.regem} onChangeText={(value) => handleChange('regem', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Funcionamento</FormControl.Label>
                                <Input placeholder='Insira aqui o funcionamento' value={novoItem.funcionamento} onChangeText={(value) => handleChange('funcionamento', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Instrução</FormControl.Label>
                                <Input placeholder='Insira aqui as instruções' value={novoItem.instrucao} onChangeText={(value) => handleChange('instrucao', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Exemplo</FormControl.Label>
                                <Input placeholder='Insira aqui algum exemplo' value={novoItem.exemplo} onChangeText={(value) => handleChange('exemplo', value)} />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormControl.Label>Referências Bibliográficas</FormControl.Label>
                                <Input placeholder='Insira aqui as referências' value={novoItem.referenciasBibliograficas} onChangeText={(value) => handleChange('referenciasBibliograficas', value)} />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModalEdit(false);
                                }}>
                                    Cancelar
                                </Button>
                                <Button onPress={() => {
                                    putItem(idItem);
                                    setShowModalEdit(false);
                                }}>
                                    Alterar
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
        )
    }

    const modalItem = () => {
        return (
            itens.length > 0
                ?
                <Center>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            <Modal.Header>{itens[indexKey].nomeItem}</Modal.Header>
                            <Modal.Body>
                                <FormControl>
                                    <FormControl.Label>Regem</FormControl.Label>
                                    <Text>{itens[indexKey].regem}</Text>
                                </FormControl>
                                <FormControl mt={3}>
                                    <FormControl.Label>Funcionamento</FormControl.Label>
                                    <Text>{itens[indexKey].funcionamento}</Text>
                                </FormControl>
                                <FormControl mt={3}>
                                    <FormControl.Label>Instrução</FormControl.Label>
                                    <Text>{itens[indexKey].instrucao}</Text>
                                </FormControl>
                                <FormControl mt={3}>
                                    <FormControl.Label>Exemplo</FormControl.Label>
                                    <Text>{itens[indexKey].exemplo}</Text>
                                </FormControl>
                                <FormControl mt={3}>
                                    <FormControl.Label>Referências Bibliográficas</FormControl.Label>
                                    <Text>{itens[indexKey].referenciasBibliograficas}</Text>
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
                                        setShowModal(false);
                                        deleteItem(itens[indexKey].idItem);
                                    }}>
                                        Excluir
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </Center>
                :
                <Center></Center>
        )
    }

    useEffect(() => {
        getItens()
    }, [])

    return (
        <SafeAreaView style={{ ...styles.body }}>
            <Cabecalho style={styles.Cabecalho} styleText={styles.CabecalhoText} title={'Method Control'} subtitle={route.params.nome} />
            <ScrollView flex={1}>
                <VStack flex={1} alignItems="center" p={3}>
                    <Titulo>{route.params.met.nomeMetodologia}</Titulo>
                    {
                        listaItens()
                    }
                </VStack>
                <Botao alignSelf='center' w='60%' onPress={() => setShowModalNew(true)} >Adicionar Item</Botao>
                {
                    modalNovoItem()
                }
                {
                    modalEditItem()
                }
                {
                    modalItem()
                }
            </ScrollView >
        </SafeAreaView>
    )
}