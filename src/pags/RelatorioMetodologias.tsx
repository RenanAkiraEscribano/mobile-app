import { View, ScrollView } from "native-base";
import { SafeAreaView } from 'react-native'
import Cabecalho from "../components/Cabecalho";
import styles from "./styles";
import { todasMetodologias } from "../servicos/todasMetodologias";
import { useState, useEffect } from 'react'

export default function RelatorioMetodologias({ route }) {
    const [metodologias, setMetodologias] = useState([]);
    const [dados, setDados] = useState([]);
    const [metodos, setMetodos] = useState([]);

    async function getMetodologias() {
        const resultado = await todasMetodologias(route.params.result.email);
        if (resultado) {
            setMetodologias(resultado.result)
        }
    }

    const hadleMakeCharts = () => {
        metodologias.map((m, index) => {
            setDados(previousArray => [...previousArray, m.numeroRevisoes]);
            setMetodos(previousArray => [...previousArray, m.nomeMetodologia]);
        })
    }

    useEffect(() => {
        getMetodologias();
        hadleMakeCharts();
    }, [])

    return (
        <SafeAreaView style={{ ...styles.body }}>
            <Cabecalho style={styles.Cabecalho} styleText={styles.CabecalhoText} title={'Method Control'} subtitle={route.params.result.nome} />
            <ScrollView flex={1}>
            </ScrollView >
        </SafeAreaView>
    )
}