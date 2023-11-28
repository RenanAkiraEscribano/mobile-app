import { VStack, Image, Text, Box, FormControl, Input, Button, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { TEMAS } from '../estilos/temas';
import Logo from '../assets/img_metodologia.png'
import { useState } from 'react';
import { criaConta } from '../servicos/criaConta';


export default function CadastroUsuario({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senhaConfirma, setSenhaConfirma] = useState('');
    const [senha, setSenha] = useState('');
    const toast = useToast();

    async function cadastro() {
        if (senha === senhaConfirma) {
            const resultado = await criaConta(nome, email, senha)
            if (resultado.affectedRows === 1) {
                navigation.replace('Login', resultado);
            } else {
                toast.show({
                    title: "Erro ao cadastrar!",
                    description: "E-mail já cadastrado!",
                    backgroundColor: 'red.500'
                })
            }
        } else {
            toast.show({
                title: "Erro no Cadastro!",
                description: "Senhas não compativeis! Verifique!",
                backgroundColor: 'red.500'
            })
        }
    }

    return (
        <VStack flex={1} alignItems="center" p={5} justifyContent='center'>
            <Image source={Logo} alt='Logo do app' size='2xl' />
            <Text fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" mt={5}>Crie sua Conta</Text>
            <Box>
                <FormControl>
                    <FormControl.Label>Nome</FormControl.Label>
                    <Input placeholder='Insira aqui seu nome' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3} value={nome} onChangeText={setNome} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder='Insira aqui seu e-mail' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3} value={email} onChangeText={setEmail} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input placeholder='Insira aqui sua senha' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3} value={senha} onChangeText={setSenha} secureTextEntry={true} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirme senha</FormControl.Label>
                    <Input placeholder='Confirme sua senha' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3} value={senhaConfirma} onChangeText={setSenhaConfirma} secureTextEntry={true} />
                </FormControl>
            </Box>
            <Button onPress={cadastro} w='100%' bg={TEMAS.colors.blue[800]} mt={10} borderRadius='lg'>Criar conta</Button>
        </VStack>
    )
}