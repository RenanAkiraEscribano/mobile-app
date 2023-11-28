import api from "./api";

let novoRevisado:number
let revisado:number

export async function revisarMetodologia(metodologia) {
    if (!metodologia) return null;
    if (metodologia.revisada == 0) {
        novoRevisado = 1
        revisado = metodologia.numeroRevisoes+1
    } else {
        novoRevisado = 0
        revisado = metodologia.numeroRevisoes
    }
    try {
        const resultado = await api.put('/api/metodologia', { idMetodologia: metodologia.idMetodologia, email: metodologia.emailUsuario, nomeMetodologia: metodologia.nomeMetodologia, revisada: novoRevisado, numeroRevisoes:  revisado}, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}