export interface IPessoa {
    name: string;
    email: string;
    document?: string;
    telefone?: string;
}

const MockPessoas: IPessoa[] = [
    {
        name: "malu ca",
        email: "malucinha@gmail.com",
        document: "12345678"
    },
    {
        name: "juleca",
        email: "julequinha@gmail.com",
        telefone: "41 99999-9999"
    }
]

export default MockPessoas;
