export interface IPerson {
    name: string,
    email:string,
    document?: string,
    telefone?: string 
}

const MockPeople: IPerson[] = [
    {
        email: "nycollas123@email.com",
        name: "nycollas sobolevski",
        document: "123123123",
    },
    {
        email:"leonardoSilio@gmail.com",
        name:"trevisharp",
        telefone: "41 99999-0909"
    }
]
export default MockPeople;