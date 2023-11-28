import api from "./api";

export async function apagaItem(idItem: number) {
    if (!idItem) return null;
    try {
        const resultado = await api.post('/api/delete', { id: idItem, objeto: 'item' }, {
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