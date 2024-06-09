     


const carre = document.getElementById("carre")
carre.addEventListener("click", function(){
    const style = getComputedStyle(carre)
    
    const color = style.color
    const width = style.width
    const height = style.height
    const backgroundColor = style.backgroundColor
    const display= style.display
    const alignItems = style.alignItems
    const justifyContent = style.justifyContent
    const fontSize = style.fontSize
    alert(`Class:carre \n -background color: ${backgroundColor} \n -Color ${color} \n -Height: ${height} \n -Width: ${width} \n -Display: ${display} \n -Font size: ${fontSize} `)
})


