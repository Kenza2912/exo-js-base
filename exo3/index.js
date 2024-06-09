

const allCarre = document.getElementById("all-carre")


allCarre.querySelectorAll(".carre").forEach(function(carre){
    carre.addEventListener('click', function(){
        if(carre.classList.contains("carre-clicked")){
            carre.classList.remove("carre-clicked")
        }else{
            carre.classList.add("carre-clicked")
        }
    })
})