export interface IPerson {
    name: string,
    email:string,
    senha?: string,
    cpf?: string,
    image?: string
}

const MockPeople: IPerson[] = [
    {
        email: "nycollas123@email.com",
        name: "nycollas sobolevski",
        senha: "123123123",
    },
    {
        email:"leonardoSilio@gmail.com",
        name:"trevisharp",
        cpf: "999.990.909-99"
    }
]
export default MockPeople;