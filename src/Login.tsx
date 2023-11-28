import { VStack, Image, Text, Box, FormControl, Input, Button, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { TEMAS } from './estilos/temas';
import Logo from './assets/img_metodologia.png'
import { useState } from 'react';
import { fazerLogin } from './servicos/autenticacao';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const toast = useToast();
  
    const toCadastroUsuario = () => {
        navigation.navigate('CadastroUsuario')
    }

    async function login(){
      const resultado = await fazerLogin(email);
      if(resultado && resultado.result.email){
        if (resultado.result.senha == senha) {
            navigation.replace('Principal', resultado);
        }
      }else{
        toast.show({
          title: "Erro no Login!",
          description: "E-mail ou senha inválidos! Verifique!",
          backgroundColor: 'red.500'
        })
      }
    }
    return (
        <VStack flex={1} alignItems="center" p={5} justifyContent='center'>
            <Image source={ Logo } alt='Logo do app' size='2xl'/>
            <Text fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" mt={5}>Faça o login</Text>
            <Box>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder='Insira aqui seu e-mail' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3} value={email} onChangeText={setEmail}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input placeholder='Insira aqui sua senha' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3} value={senha} onChangeText={setSenha} secureTextEntry={true}/>
                </FormControl>
            </Box>
            <Button onPress={login} w='100%' bg={TEMAS.colors.blue[800]} mt={10} borderRadius='lg'>Entrar</Button>
            <Box mt={10} w='100%' flexDirection='row' justifyContent='center'>
                <Text>Ainda não possui conta?</Text>
                <TouchableOpacity onPress={toCadastroUsuario}>
                    <Text color='blue.500'> Faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}


