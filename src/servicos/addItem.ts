import api from "./api";

export async function addItem(idMetodologia: number, item) {
    if (!idMetodologia || !item) return null;
    try {
        const resultado = await api.post('/api/item', { idMetodologia: idMetodologia, nomeItem: item.nomeItem, regem: item.regem, funcionamento: item.funcionamento, instrucao: item.instrucao, exemplo: item.exemplo, referenciasBibliograficas: item.referenciasBibliograficas }, {
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