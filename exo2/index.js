
//je déclare tous mes carrés dans une variable.
const allCarre = document.getElementById("all-carre")
// je déclenche un évènement pour chaque carré en créant une boucle
allCarre.querySelectorAll(".carre").forEach(function(carre) {
    carre.addEventListener('click',function(){
        const color = getComputedStyle(carre).backgroundColor
        const recupCarre = document.querySelector(".background-carre")
        recupCarre.style.backgroundColor = color
        recupCarre.innerText = color
        
    })
})