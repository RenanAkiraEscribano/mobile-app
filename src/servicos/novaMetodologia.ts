import api from "./api";

export async function novaMetodologia(email: string, nomeMetodologia: string) {
    if (!email || !nomeMetodologia) return null;
    try {
        const resultado = await api.post('/api/metodologia', { email: email, nomeMetodologia: nomeMetodologia }, {
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