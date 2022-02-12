const clientes = [
    { 
        nome: "Andre",
        cpf: "12345553455",
        dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "Filha",
            dataNasc: "20/03/2011",
        },
        {
            nome: "Samia Maria",
            parentesco: "Filha",
            dataNasc: "15/05/2014",
        }],
    },
    {
        nome: "Juliana",
        cpf: "12345234455",
        dependentes: [
            {
                nome: "Sophia",
                parentesco: "Filha",
                dataNasc: "30/08/2020",
            },
        ],
    }
];

const listaDependentes = [
    ...clientes[0].dependentes,
    ...clientes[1].dependentes,
];

console.log(listaDependentes);
