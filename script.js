const texto=document.getElementById("entrada")
const container=document.getElementById("lista-container")


texto.addEventListener("keyup", function(e){
    if(e.key=='Enter'){
        adicionar()
    }
});

const lista=[]
const adicionar=()=>{
    const valor=texto.value

    if(valor=='') return;
    texto.value='';
    container.innerHTML='';
    lista.push(valor);
    tamanho_lista=lista.length;
    for(i=0;i<tamanho_lista;i++){
        const li=document.createElement("li");
        valor_node=document.createTextNode(lista[i]);
        li.appendChild(valor_node);
        container.appendChild(li);
    }


}