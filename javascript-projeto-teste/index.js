
const inputItem = document.getElementById("input-item");
const listaDeCompras  = document.getElementById("lista-de-compras");
const botaoAdcicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdcicionar.addEventListener("click" , (evento)=>{

    if(inputItem.value === ""){
        alert("Por favor, digitar algo para incluir na lista");
        return;
    } 

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value ;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);


    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weeday: "long"
    })
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR",{
        hour: "numeric",
        minute: "numeric"
    })
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}` ;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta ; 
    itemData.classList.add("texto-data");

    
    itemDaLista.appendChild(containerItemDaLista);
    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);

    verificaListaVazia();

})

const mensagemListaVazia = document.querySelector(".msg-lista-vazia");

function verificaListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll("li");

    if(itensDaLista.length === 0){
        mensagemListaVazia.style.display = "block";
    }else{
        mensagemListaVazia.style.display = "none";
    }
}

verificaListaVazia();