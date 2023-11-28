import api from "./api";

export async function todasMetodologias(email: string) {
    if (!email) return null;

    try {
        const resultado = await api.post('/api/metodologias', { email: email }, {
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