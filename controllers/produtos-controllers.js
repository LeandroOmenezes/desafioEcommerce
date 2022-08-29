import { produtoServices } from "../servicos/produto-servicos.js";

const novoProduto = (name, price, imageUrl) => {
    const card = document.createElement("div");
    const conteudo =  `
                        <div class="container-img">
                        <img src="${imageUrl}" alt="">
                        </div>
                        <p class="nome-produto">${name}</p>
                        <p class="preco-produto">${price}</p>
                        <a href="produto.html" class="link-produto">Ver produto</a>
                        </div>
                      `
    card.innerHTML = conteudo
    return card
}

const produtos = document.querySelector("[data-product]")

const render = async () => {
    try {
        const listaProdutos = await produtoServices.listaProdutos()
        listaProdutos.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageUrl))
        });
    }

    catch (erro) {
        console.log(erro)

    }
}

render()