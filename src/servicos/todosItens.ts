import api from "./api";

export async function todosItens(idMetodologia: number) {
    if (!idMetodologia) return null;

    try {
        const resultado = await api.post('/api/itens', { idMetodologia: idMetodologia }, {
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