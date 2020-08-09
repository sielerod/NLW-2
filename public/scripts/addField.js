//procurar botão
document.querySelector("#add-time").addEventListener("click",cloneField)

//quando clicar no botão, executar ação
function cloneField(){
    console.log("cheguei aqui")

    // duplicar os campos: que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //pegar os campos e limpar input
    const fields = newFieldContainer.querySelectorAll("input")
    fields.forEach(function(field){
        //pegar o field do momento
        field = ""
    })

    //colocar na página: onde?
    document.querySelector(".schedule-item").appendChild(newFieldContainer)
}