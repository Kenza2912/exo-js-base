

const carre=document.querySelectorAll(".carre")
const icones =document.querySelectorAll(".icones")
const p =document.querySelectorAll('.nom-reseau')

icones.forEach(icone=>{
    icone.addEventListener('click',function(){

        const isActive = icone.classList.contains("box-clicked") 
        icone.classList.toggle("box-clicked")
        if(isActive){
            
            console.log("coucou")
        }
             
        
    })
})
