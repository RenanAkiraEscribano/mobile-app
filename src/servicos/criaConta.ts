import api from "./api";

export async function criaConta(nome: string, email: string, senha: string) {
    if (!email) return null;

    try {
        const resultado = await api.post('/api/usuario', { nome:nome, email: email, senha:senha }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        console.log(resultado.data);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}