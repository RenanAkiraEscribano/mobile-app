import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { TEMAS } from '../estilos/temas';
import Logo from '../assets/img_metodologia.png'
import { Titulo } from '../components/Titulo';
import { EntradaTexto } from '../components/EntradaTexto';
import React from 'react';
import * as AuthSession from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';
import { RoutesHomeTypes } from "../routes/RoutesHome";
import Principal from './Principal';

//const navigation = useNavigation<RoutesHomeTypes>();

type authResponse = {
    params: {
        access_toke: string;
    };
    type: string;
}

export default function Login( {navigation} ) {
    /*
    async function handleGoogleSignIn() {
        try {
            const CLIENT_ID = '394565053643-562t24itqdsef7kjmgqq9up87spm8ful.apps.googleusercontent.com';
            const REDIRECT_URI = 'https://auth.expo.io/@renanakira/mobile-app';
            const SCOPE = encodeURI('profile email');
            const RESPONSE_TYPE = 'token';

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?
                client_id=${CLIENT_ID}
                &redirect_uri=${REDIRECT_URI}
                &response_type=${RESPONSE_TYPE}
                &scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl }) as authResponse;
            console.log(type, params)

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_toke}`);
                const user = await response.json();
                console.log(user)
            }

        } catch (error) {
            console.log(error);
        }
    }
*/
    return (
        <VStack flex={1} alignItems="center" p={5} justifyContent='center'>
            <Image source={Logo} alt='Logo do app' size='2xl' />
            <Titulo>
                Faça o Login
            </Titulo>
            <Box>
                <EntradaTexto label='Email' placeholder='Insira aqui seu email' />
                <EntradaTexto label='Senha' placeholder='Insira aqui sua senha' />
            </Box>
            <Button onPress={() => navigation.navigate('Principal')} w='100%' bg={TEMAS.colors.blue[800]} mt={10} borderRadius='lg'>Entrar</Button>
            <Link href='http://www.google.com.br' mt={5}>
                Esqueceu sua senha?
            </Link>
            <Box mt={10} w='100%' flexDirection='row' justifyContent='center'>
                <Text>Ainda não possui conta?</Text>
                <TouchableOpacity>
                    <Text color='blue.500'>Faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}


