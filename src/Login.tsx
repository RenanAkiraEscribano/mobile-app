import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { TEMAS } from './estilos/temas';
import Logo from './assets/img_metodologia.png'


export default function Login() {
    return (
        <VStack flex={1} alignItems="center" p={5} justifyContent='center'>
            <Image source={ Logo } alt='Logo do app' size='2xl'/>
            <Text fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" mt={5}>Faça o login</Text>
            <Box>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder='Insira aqui seu e-mail' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input placeholder='Insira aqui sua senha' size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3}/>
                </FormControl>
            </Box>
            <Button w='100%' bg={TEMAS.colors.blue[800]} mt={10} borderRadius='lg'>Entrar</Button>
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


