//GET

const listaProdutos = () => fetch("http://localhost:3000/produto").then(resposta => resposta.json())

//POST

const criaProdutos = (name, price, imageUrl) => {
    return fetch("http://localhost:3000/produto", {
         method: "POST",
         headers: {
            "Content-Type" : "aplication/json"
         },
         body: JSON.stringify({
            name,
            price,
            imageUrl
         })
    })
    .then(resposta => {
         if(resposta.ok){
            return resposta.body
         }
         throw new Error("Não foi possivel criar o produto!")
    })
}


export const produtoServices = {
    listaProdutos,
    criaProdutos
}