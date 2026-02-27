function playAnimation(){
    const Change = document.getElementById("sec-dois");
    Change.style.transition = "5s"
    Change.style.transform = "scale(3.5)"
    Change.style.opacity = "0%"
function Die(){
    const Death = document.getElementById("Death")
    Change.parentNode.removeChild(Change)
    Death.parentNode.removeChild(Death)
}
setTimeout(Die,5001)
setTimeout(Reborn,4001)
setTimeout(Show,7250)
}
function Reborn(){
    const Bg = document.getElementById("section")
    var Branco = document.getElementById("section")
    Bg.style.transition = "4s"
    Bg.style.backgroundAttachment = "fixed"
    Bg.style.backgroundRepeat = "no-repeat"
    Bg.style.backgroundSize = "cover"
    if(Branco.classList == "Modo_Claro"){
    Bg.style.backgroundImage = "url(./Img/Pingu_Branco.gif)"
    }
    else{
    Bg.style.backgroundImage = "url(./Img/Pingu.gif)"
    }
}

function Show() {
    const texto = document.getElementById("sec-um")
    const texto1 = document.getElementById("sec-tres")
    texto.style.opacity = "100%"
    texto.style.transition ="2.5s"
    texto.style.bottom = "50%"
    texto1.style.opacity = "100%"
    texto1.style.transition ="2.5s"
    texto1.style.bottom = "50%"
}

 var click = 0

function PRETO(){

    const Slide = document.getElementById("section")
    const Icon = document.getElementById("sec-um")
    const Icon1 = document.getElementById("sec-tres")
    const IMG = document.getElementById("sec-dois")
    if(click % 2 == 0){
    if(IMG){
    Slide.classList.toggle("Modo_Claro")
    Slide.classList.remove("Modo_Escuro")
    Icon.classList.toggle("col-section_Black")
    Icon.classList.remove("col-section")
    Icon1.classList.toggle("col-section_Black")
    Icon1.classList.remove("col-section") 
    IMG.style.filter = "invert(100%)"
    click++
    console.log(click)
    }
    else{
    Slide.classList.toggle("Modo_Claro")
    Slide.classList.remove("Modo_Escuro")
    Icon.classList.toggle("col-section_Black")
    Icon.classList.remove("col-section")
    Icon1.classList.toggle("col-section_Black")
    Icon1.classList.remove("col-section")
    Slide.style.backgroundImage = "url(./Img/Pingu_Branco.gif)"  
    click++
    console.log(click)
    }
    }
    else{
    if(IMG){
    Slide.classList.toggle("Modo_Escuro")
    Slide.classList.remove("Modo_Claro")
    Icon.classList.toggle("col-section")
    Icon.classList.remove("col-section_Black")
    Icon1.classList.toggle("col-section")
    Icon1.classList.remove("col-section_Black")
    IMG.style.filter = "invert(0%)"
    click--
    }
    else{
    Slide.classList.toggle("Modo_Escuro")
    Slide.classList.remove("Modo_Claro")
    Icon.classList.toggle("col-section")
    Icon.classList.remove("col-section_Black")
    Icon1.classList.toggle("col-section")
    Icon1.classList.remove("col-section_Black")
    Slide.style.backgroundImage = "url(./Img/Pingu.gif)"
    click--
    }
    }

}