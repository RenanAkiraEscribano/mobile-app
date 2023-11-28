import api from "./api";

export async function editarItem(idItem: number, item) {
    if (!idItem || !item) return null;
    try {
        const resultado = await api.put('/api/item', { idItem: idItem, nomeItem: item.nomeItem, regem: item.regem, funcionamento: item.funcionamento, instrucao: item.instrucao, exemplo: item.exemplo, referenciasBibliograficas: item.referenciasBibliograficas }, {
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