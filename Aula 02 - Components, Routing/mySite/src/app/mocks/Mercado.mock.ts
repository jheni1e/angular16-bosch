export interface IMercado {
    id: number;
    name: string;
    price: number;
    image: string;
    nota: number;
    tempo_entrega: number;
}

const MockMercados: IMercado[] = [
    {
        "id": 1,
        "name": "Macarrão Instantâneo Nissin Turma da Mônica Galinha Suave 85g",
        "price": 2.55,
        "image": "https://prezunic.vtexassets.com/arquivos/ids/187411-800-auto?v=638368827880070000&width=800&height=auto&aspect=true",
        "nota": 4.5,
        "tempo_entrega": 15
    },
    {
        "id": 2,
        "name": "Refrigerante Coca-Cola Sem Açúcar 2L",
        "price": 10.20,
        "image": "https://superrissul.vtexassets.com/arquivos/ids/1020139/Refrigerante-CocaCola-sem-Acar-Pet-2L.png?v=639051093546130000",
        "nota": 4.6,
        "tempo_entrega": 20
    },
    {
        "id": 3,
        "name": "Arroz Branco Tipo 1 5kg",
        "price": 22.90,
        "image": "https://coopsp.vtexassets.com/arquivos/ids/222143-800-auto?v=637919570674000000&width=800&height=auto&aspect=true",
        "nota": 4.4,
        "tempo_entrega": 30
    },
    {
        "id": 4,
        "name": "Feijão Carioca Tipo 1 1kg",
        "price": 7.49,
        "image": "https://supermercadobomdemais.com.br/wp-content/uploads/2021/01/Feijao-carioca-camil-1kg.jpg",
        "nota": 4.3,
        "tempo_entrega": 25
    },
    {
        "id": 5,
        "name": "Leite Integral 1L",
        "price": 4.39,
        "image": "https://bretas.vtexassets.com/arquivos/ids/192039-800-auto?v=638375518429700000&width=800&height=auto&aspect=true",
        "nota": 4.0,
        "tempo_entrega": 15
    },
    {
        "id": 6,
        "name": "Pão de Forma Wickbold Original",
        "price": 6.99,
        "image": "https://wickbold.com.br/wp-content/uploads/2018/02/20240724_Do_Forno_Original_Wickbold_450g_V0724_FRENTE-768x768.png",
        "nota": 4.2,
        "tempo_entrega": 20
    },
    {
        "id": 7,
        "name": "Óleo de Soja Aliza meuzovo kk 900ml",
        "price": 5.89,
        "image": "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/15165/medium/oleo-de-soja-liza-900ml_10676.png",
        "nota": 4.1,
        "tempo_entrega": 25
    },
    {
        "id": 8,
        "name": "Açúcar Refinado 1kg",
        "price": 3.79,
        "image": "https://cdn.awsli.com.br/600x1000/446/446822/produto/19593247/5f85211c37.jpg",
        "nota": 4.0,
        "tempo_entrega": 20
    }
]

export default MockMercados;
