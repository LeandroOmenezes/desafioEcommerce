const produtos = [
    {
        id: 01,
        categoria: "star wars",
        img: "./images/star_wars3.png",
        nome: "caneca stormtrooper",
        descricao: "Caneca stormtrooper",
        preco: "R$ 10,99", 
    },
    {
        id: 02,
        categoria: "star wars",
        img: "./images/star_wars2.png",
        nome: "fantasia stormtrooper",
        descricao: "Fantasia stormtrooper",
        preco: "R$ 79,99",
    },
    {
        id: 03,
        categoria: "star wars",
        img: "./images/star_wars1.png",
        nome: "fantasia kylo ren",
        descricao: "Fantasia kylo ren",
        preco: "R$ 99,99",
    },
    {
        id: 04,
        categoria: "star wars",
        img: "./images/star_wars4.png",
        nome: "funko pop darth vader",
        descricao: "Funko pop darth vader",
        preco: "R$ 23,90",
    },
    {
        id: 05,
        categoria: "star wars",
        img: "./images/star_wars5.png",
        nome: "funko pop baby yoda",
        descricao: "Funko pop baby yoda",
        preco: "R$ 54,90",
    },
    {
        id: 06,
        categoria: "star wars",
        img: "./images/star_wars6.png",
        nome: "miniatura mestre yoda",
        descricao: "Miniatura mestre yoda",
        preco: "R$ 49,90",
    },
    {
        id: 07,
        categoria: "consoles",
        img: "./images/console_1.png",
        nome: "controle xbox séries x",
        descricao: "Controle xbox séries x branco",
        preco: "R$ 89,90",
    },
    {
        id: 08,
        categoria: "consoles",
        img: "./images/console_3.png",
        nome: "console playstation 5",
        descricao: "Console playstation 5",
        preco: "R$ 2.789,90",
    },
    {
        id: 09,
        categoria: "consoles",
        img: "./images/console_5.png",
        nome: "console retro",
        descricao: "Console retro",
        preco: "R$ 189,90",
    },
    {
        id: 10,
        categoria: "consoles",
        img: "./images/console_6.png",
        nome: "nintendo switch",
        descricao: "Nintendo switch",
        preco: "R$ 489,90",
    },
    {
        id: 11,
        categoria: "consoles",
        img: "./images/console_2.png",
        nome: "console xbox series x",
        descricao: "Console xbox series x",
        preco: "R$ 1.489,90",
    },
    {
        id: 12,
        categoria: "consoles",
        img: "./images/console_4.png",
        nome: "game boy color personalizado",
        descricao: "Game boy color personalizado",
        preco: "R$ 289,90",
    },
    {
        id: 13,
        categoria: "diversos",
        img: "./images/diversos2.png",
        nome: "camisa atari",
        descricao: "Camisa atari",
        preco: "R$ 89,90",
    },
    {
        id: 14,
        categoria: "diversos",
        img: "./images/diversos1.png",
        nome: "camisa geek retro",
        descricao: "Camisa geek retro",
        preco: "R$ 69,90",
    },
    {
        id: 15,
        categoria: "diversos",
        img: "./images/diversos6.png",
        nome: "miniatura sonic",
        descricao: "Miniatura sonic",
        preco: "R$ 39,90",
    },
    {
        id: 16,
        categoria: "diversos",
        img: "./images/diversos3.png",
        nome: "radio retro",
        descricao: "Radio retro",
        preco: "R$ 89,90",
    },
    {
        id: 17,
        categoria: "diversos",
        img: "./images/diversos4.png",
        nome: "oculos realidade virtual",
        descricao: "Óculos realidade virtual",
        preco: "R$ 129,90",
    },
    {
        id: 18,
        categoria: "diversos",
        img: "./images/diversos5.png",
        nome: "fantasia pikachu",
        descricao: "Fantasia pikachu",
        preco: "R$ 119,90",
    },
];

const categorias = produtos.reduce(function (ac, item) {
    if (!ac.includes(item.categoria)) {
        ac.push(item.categoria);
    }

    return ac;
}, []);




