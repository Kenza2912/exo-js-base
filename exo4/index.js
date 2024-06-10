

const icones =document.querySelectorAll(".icones")
const planArriere = document.querySelector(".follow")
const carre = document.querySelectorAll(".carre")
console.log(planArriere)

icones.forEach(icone=>{
    icone.addEventListener('click',function(){ 

        // const isActive = icone.classList.contains("box-clicked") 
        const color = getComputedStyle(icone).backgroundColor
        

       
        icone.classList.toggle("box-clicked")
        if(icone.classList.contains("box-clicked")){
            planArriere.style.backgroundColor = color
        }else{
            
             planArriere.style.backgroundColor ="gray"
        }
        
        // planArriere.style.backgroundColor ="gray"
    })
})
