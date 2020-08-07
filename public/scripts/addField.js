//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar no botao


//executar uma acao
function cloneField(){
    //duplicar os campos. Que campos?

    const newFieldcontainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true ou false

   //pegar os campos: Que campos?
    const fields = newFieldcontainer.querySelectorAll('input')

    //para cada campo,limpar
      fields.forEach(function(field){
          //pegar o field do momento E LIMPA ELE
          field.value = ""
          
      })


    // colocar na página; onde?
    document.querySelector('#schedule-items').appendChild(newFieldcontainer)
}