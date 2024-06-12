

const message = document.querySelector(".message")
console.log(message)
let conv = 6.55957
const input = document.getElementById("valeur")
console.log(input)
const result = document.querySelector(".result")
console.log(result)






input.addEventListener("input",function(){
    const changeNb = input.value
    if(Number.isNaN(changeNb)){
        
        message.textContent = "Vous devez saisir une valeur numérique"
    }else{
        result.textContent = (parseFloat(changeNb)*conv).toFixed(2)
     
        
    }
})





