import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { todasMetodologias } from '../servicos/todasMetodologias'
import { todosItens } from '../servicos/todosItens'
import { useState } from 'react'

export const geraPDF = async (user) => {

    let metodologias = []
    let tabelaMetodologia = ``
    var tabelaItens = ``

    const resultado = await todasMetodologias(user.email);
    if (resultado) {
        metodologias = resultado.result
    }

    const montaTabelas = async () => {
        for (const [index, m] of metodologias.entries()) {
            tabelaMetodologia += `
            <tr key={${index}}>
                <td>${m.idMetodologia}</td>
                <td>${m.nomeMetodologia}</td>
                <td>${m.numeroRevisoes}</td>
            </tr>`
            const response = await todosItens(m.idMetodologia)
            if (response.result.length > 0) {
                response.result.map((i, index) => {
                    tabelaItens += `
                    <tr key={${index}}>
                        <td>${i.idMetodologia}</td>
                        <td>${i.nomeItem}</td>
                        <td>${i.regem}</td>
                        <td>${i.funcionamento}</td>
                        <td>${i.instrucao}</td>
                        <td>${i.exemplo}</td>
                        <td>${i.referenciasBibliograficas}</td>
                    </tr>`
                })
            }
        }
    }

    await montaTabelas()

    const html = `
    <html>
        <head>
            <title>Method Control</title>
            <style>
                table, th, td {
                    border: 1px solid black;
                    border-collapse: collapse;
                }
            </style>
        </head>
        <body>
            <h1>Method Control</h1>
        
            <h2>Metodologias</h2>
            <table>
                <tr>
                    <th>Identificação</th>
                    <th>Nome</th>
                    <th>Numero de revisões</th>
                </tr>
                ${tabelaMetodologia}
            </table>
        
            <h2>Itens</h2>
            <table>
                <tr>
                    <th>Metodologia</th>
                    <th>Nome</th>
                    <th>Regem</th>
                    <th>Funcionamento</th>
                    <th>Instrução</th>
                    <th>Exemplo</th>
                    <th>Referências</th>
                </tr>
                ${tabelaItens}
            </table>
        </body>
    </html>
    `;

    const file = await printToFileAsync({
        html: html,
        base64: false
    });

    await shareAsync(file.uri)
} 