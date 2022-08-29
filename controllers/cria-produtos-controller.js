import { produtoServices } from "../servicos/produto-servicos.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.querySelector('[data-nome]').value;
    const preco = evento.target.querySelector('[data-preco]').value;
    const url = evento.target.querySelector('[data-url]').value;

    produtoServices.criaProdutos(nome, preco, url).then(resposta => {
        window.location.pathname = "/index.html"
        console.log(resposta)
    }).catch (err =>{
        console.log(err)
    })

})
