const text = [
    `O chocolate é, em geral, uma mistura de pasta de cacau em pó, manteiga de cacau e açúcar. De acordo com as proporções utilizadas, obtêm-se diferentes qualidades, texturas e aromas. Os chocolates com mais porcentagem de manteiga de cacau são mais gordurosos e se derretem melhor na boca. Os chocolates com maior quantidade de pasta de cacau em pó são de sabor e aroma mais intensos. Além dessa tipo, que geralmente consumido em forma de tabletes e bombons.`,
    `Chocolate. O chocolate é um alimento feito com base na amêndoa fermentada e torrada do cacau. Sua origem remonta às civilizações pré-colombianas da América Central. A partir dos Descobrimentos, foi levado para a Europa, onde se popularizou, especialmente a partir dos séculos XVII e XVIII.`,
    `O chocolate é um alimento feito com base na amêndoa fermentada e torrada do cacau. Sua origem remonta às civilizações pré-colombianas da América Central. A partir dos Descobrimentos, foi levado para a Europa, onde se popularizou, especialmente a partir dos séculos XVII e XVIII. Contudo, devido às necessidades climáticas para o cultivo do cacau, não é possível o seu plantio na Europa e por isso as colónias americanas de clima tropical úmido continuaram a fornecer a matéria-prima. Atualmente os maiores produtores estão na África Ocidental.`,
    `O chocolate, tal como é consumido hoje, é resultado de sucessivos aprimoramentos realizados desde o início da colonização da América. O produto era consumido pelos nativos na forma de uma bebida quente e amarga, de uso exclusivo da nobreza. Os europeus passaram a adoçar e a misturar especiarias para adequá-lo ao seu gosto. Com o desenvolvimento dos processos industriais e técnicas culinárias, surgiu o chocolate com leite e depois na forma de um sólido. Atualmente, é encontrado em diferentes formas que vão desde o sólido, como o chocolate em pó, as barras, os ovos e os bombons, e líquido, como achocolatado ou chocolate quente. Além de ser consumido puro, é também ingrediente de um grande número de alimentos como bolos (tortas, biscoitos, etc.), mousses, sorvetes e outros doces.`,
    `Paralelamente, o chocolate passou a ser associado a determinadas festividades, como por exemplo a Páscoa. Além disso, com as descobertas científicas, foram conhecidas algumas propriedades que o relaciona, especialmente na versão amarga, à saúde humana. Contudo, o mesmo não se aplica a diversos animais domésticos.Além de crescer apenas em lugares úmidos e quentes, geralmente perto da linha do Equador, a Theobroma cacao (nome dado a árvore do chocolate) é bastante suscetível a doenças.`,
    `Seus frutos devem ser retirados a mão e o momento da colheita é crucial para obter um bom sabor no produto final. Além disso, os frutos devem ser cortados cuidadosamente um a um para não danificar as sementes.`,
    `O chocolate branco não é chocolate, pois é, o chocolate branco não deveria ser chamado de chocolate. Porque ele não contém pasta de cacau, apenas a manteiga de cacau,o leite e açúcar.`,
    `O chocolate ao leite, como o nome já diz, também leva leite na sua elaboração, mas a pasta de cacau está presente em maior ou menor quantidade.`,
    `Já o amargo não contém leite. A porcentagem de cacau varia e essa informação normalmente está presente na embalagem. O que poucas pessoas sabem é que a porcentagem de cacau no chocolate está diretamente relacionada com a quantidade de açúcar.`,
];

const produtos = [
    {
        id: 01,
        categoria: "nestle",
        img: "./images/img4.png",
        nome: "caixa de bombom nestle 251g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 02,
        categoria: "nestle",
        img: "./images/img3.png",
        nome: "Kit Kat white 41,5g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 03,
        categoria: "nestle",
        img: "./images/img2.png",
        nome: "kit kat dark 41,5g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 04,
        categoria: "nestle",
        img: "./images/img11.png",
        nome: "galak 90g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 05,
        categoria: "nestle",
        img: "./images/img6.png",
        nome: "alpino 90g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 06,
        categoria: "nestle",
        img: "./images/img10.png",
        nome: "classic ao leite",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 07,
        categoria: "lacta",
        img: "./images/img1.png",
        nome: "bis xtra original 45g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 08,
        categoria: "lacta",
        img: "./images/img7.png",
        nome: "Bis original",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 09,
        categoria: "lacta",
        img: "./images/img9.png",
        nome: "bis xtra oreo 45g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 10,
        categoria: "lacta",
        img: "./images/img22.png",
        nome: "caixa de bombom lacta 250,6g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 11,
        categoria: "lacta",
        img: "./images/img24.png",
        nome: "laka oreo 90g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 12,
        categoria: "lacta",
        img: "./images/img25.png",
        nome: "diamante negro 90g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 13,
        categoria: "harsheys",
        img: "./images/img12.png",
        nome: "Kit 4 un. Barras Chocolate Branco, Cookies'n'Creme, Special Dark Laranja e Ao Leite Recheada Reese's",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 14,
        categoria: "harsheys",
        img: "./images/img13.png",
        nome: "dose dupla de barras recheadas",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 15,
        categoria: "harsheys",
        img: "./images/img15.png",
        nome: "kit completo special dark",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 16,
        categoria: "harsheys",
        img: "./images/img26.png",
        nome: "tablete branco cookies 87G hershey's",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 17,
        categoria: "harsheys",
        img: "./images/img14.png",
        nome: "kit 5 un. barras hershey's amendoim 85g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 18,
        categoria: "harsheys",
        img: "./images/img27.png",
        nome: "tablete amendoim 85G hershey's",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 19,
        categoria: "ofertas",
        img: "./images/img8.png",
        nome: "caixa de bombom goroto 250g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 20,
        categoria: "ofertas",
        img: "./images/img21.png",
        nome: "Biscoito Wafer Maxi Cookies 117g - Bauducco",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 21,
        categoria: "ofertas",
        img: "./images/img18.png",
        nome: "disqueti chocolate ao leite 40g Dori",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 22,
        categoria: "ofertas",
        img: "./images/img17.png",
        nome: "Tablete de Chocolate Ao Leite Flocos Crocantes 85g - Hersheys",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 23,
        categoria: "ofertas",
        img: "./images/img23.png",
        nome: "shot 90g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 24,
        categoria: "ofertas",
        img: "./images/img24.png",
        nome: "laka oreo 90g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 25,
        categoria: "diversos",
        img: "./images/img30.png",
        nome: "kit kat original 41,5g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 26,
        categoria: "diversos",
        img: "./images/img29.png",
        nome: "confeito m&ms chocolate ao leite 148g mars",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 27,
        categoria: "diversos",
        img: "./images/img5.png",
        nome: "chocolate ao leite goroto 90g",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 28,
        categoria: "diversos",
        img: "./images/img28.png",
        nome: "batata pringles original",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 29,
        categoria: "diversos",
        img: "./images/img19.png",
        nome: "Mentos tutti-fresh",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 30,
        categoria: "diversos",
        img: "./images/img20.png",
        nome: "mentos melancia",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
];

function gerarPreco() {
    let aleatorio = (Math.random() * 100).toFixed(0);

    if (aleatorio < 10) {
        return "0" + aleatorio;
    } else {
        return aleatorio;
    }
}

function gerarDescricao() {
    let num = Math.floor(Math.random() * text.length);

    return text[num];
}

const categorias = produtos.reduce(function (ac, item) {
    if (!ac.includes(item.categoria)) {
        ac.push(item.categoria);
    }

    return ac;
}, []);