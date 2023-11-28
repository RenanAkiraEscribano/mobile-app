import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const body = {
    flex: 1,
    paddingTop: Constants.statusBarHeight,

}

export default StyleSheet.create({

    body: {
        ...body,
        top: 0,
        backgroundColor: '#fff'
    },
    
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: '100%',
        marginTop: -5
    },
    card2: {
        
        flex: 1,
        margin: 10,
        backgroundColor: '#005478',
        borderRadius: 10,
        height: '100%',
        marginTop: -5,
        borderWidth: 1.5, 
        borderColor: '#005478'
    },
    titulo: {
        color: '#005478',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        paddingLeft: 6,
    },
    CabecalhoText: {
        color: 'white',
        fontSize: 20,
    },

    Cabecalho: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#005478'
    },
    OsTipo: {
        color: '#111111',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingBottom: 0,
    },

    infoBloco: {
        paddingTop: 2,
        paddingBottom: 8,
        paddingLeft: 6,
    },

    indiceBloco: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },

    valorBloco: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    indice: {
        color: '#111111',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    valor: {
        textTransform: 'uppercase',
    },

    planoBloqueados: {
        color: '#fff',
        backgroundColor: 'red',
        padding: 4,
        borderRadius: 5,
        alignSelf: 'flex-start',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    /* Icones de telefone *********************/
    linhaTelefone: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconesTelefone: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 15,
    },
    itensIconeTelefone: {
        marginHorizontal: 10,
    },
    /* Final Icones de telefone ***************/

    linha: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 18,
    },

    ctoOnu: {
        flex: 1,
        backgroundColor: '#005478',
        marginVertical: 5,
        marginHorizontal: 3,
        padding: 5,
        borderRadius: 10,
    },

    blocoGenerico: {
        flex: 1,
        backgroundColor: '#005478',
        marginVertical: 5,
        padding: 8,
        borderRadius: 10,
    },

    valorDataId: {
        color: '#c0c0c0'
    },
    /* Fina Informacoes abaixo dos blocos de CTO e ONU */
});