//Procurar o botao
document.querySelector("*add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    //Duplicar os campos
    //Quais campos
    const newfieldContainer= document.querySelector('.schedule-item').cloneNode(true)
  
    //limpar campos, quais  campos
    const fields = newfieldContainer.querySelector('input')
   
    //limpar cada campo
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        fields.value=""
    })
  
    //Colocar na pagina onde?
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}
    