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
    const Header = document.getElementById("message")
    const Footer = document.getElementById("resist")
    const Style = document.getElementById("widen")
    const Shrek = document.getElementById("BORACO")
    const Burro = document.getElementById("Burro")
    if(click % 2 == 0){
    if(IMG){
    Slide.classList.toggle("Modo_Claro")
    Slide.classList.remove("Modo_Escuro")
    Icon.classList.toggle("col-section_Black")
    Icon.classList.remove("col-section")
    Icon1.classList.toggle("col-section_Black")
    Icon1.classList.remove("col-section") 
    IMG.style.filter = "invert(100%)"
    Header.href = "./css/header_White.css"
    Style.href = "./css/css_White.css"
    Footer.href = "./css/footer_White.css"
    Shrek.style.filter = "invert(100%)"
    Burro.src = "./img/u.png"
    click++
    }
    else{
    Slide.classList.toggle("Modo_Claro")
    Slide.classList.remove("Modo_Escuro")
    Icon.classList.toggle("col-section_Black")
    Icon.classList.remove("col-section")
    Icon1.classList.toggle("col-section_Black")
    Icon1.classList.remove("col-section")
    Slide.style.backgroundImage = "url(./Img/Pingu_Branco.gif)"
    Shrek.style.filter = "invert(100%)"
    Burro.src = "./img/u.png" 
    Header.href = "./css/header_White.css"
    Style.href = "./css/css_White.css"
    Footer.href = "./css/footer_White.css" 
    click++
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
    Shrek.style.filter = "invert(0%)"
    Burro.src = "./img/Hesko-remove.png"
    Header.href = "./css/header.css"
    Style.href = "./css/style.css"
    Footer.href = "./css/footer.css"
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
    Shrek.style.filter = "invert(0%)"
    Burro.src = "./img/Hesko-remove.png"
    Header.href = "./css/header.css"
    Style.href = "./css/style.css"
    Footer.href = "./css/footer.css"
    click--
    }
    }

}

function PretoGeral(){
    const Header = document.getElementById("message");
    const Footer = document.getElementById("resist");
    const Style = document.getElementById("widen");
    const Shrek = document.getElementById("BORACO");
    const Burro = document.getElementById("Burro");
    const IMG1 = document.getElementById("a")
    const IMG2 = document.getElementById("b")
    const IMG3 = document.getElementById("c")
    if(click % 2 == 0){
        if(IMG1 + IMG2 + IMG3){
    Header.href = "../css/header_White.css";
    Style.href = "../css/css_White.css";
    Footer.href = "../css/footer_White.css";
    Shrek.style.filter = "invert(100%)";
    Burro.src = "../img/u.png"
    IMG1.style.filter = "invert(100%)"
    IMG2.style.filter = "invert(100%)"
    IMG3.style.filter = "invert(100%)"
    click++;
    }
    else{
    Header.href = "../css/header_White.css";
    Style.href = "../css/css_White.css";
    Footer.href = "../css/footer_White.css";
    Shrek.style.filter = "invert(100%)";
    Burro.src = "../img/u.png"
    click++
    }
    }
    else{
        if(IMG1 + IMG2 + IMG3){
    Header.href = "../css/header.css";
    Style.href = "../css/style.css";
    Footer.href = "../css/footer.css";
    Shrek.style.filter = "invert(0%)";
    Burro.src = "../img/Hesko-remove.png"
    IMG1.style.filter = "invert(0%)"
    IMG2.style.filter = "invert(0%)"
    IMG3.style.filter = "invert(0%)"
    click--  
    }
    else{
    Shrek.style.filter = "invert(0%)";
    Burro.src = "../img/Hesko-remove.png"
    Header.href = "../css/header.css";
    Style.href = "../css/style.css";
    Footer.href = "../css/footer.css"
    click--
    }
}
}

function PretoServico(){
    const Header = document.getElementById("message");
    const Footer = document.getElementById("resist");
    const Style = document.getElementById("Serv");
    const Shrek = document.getElementById("BORACO");
    const Burro = document.getElementById("Burro");
    const IMG = document.getElementById("montana");
    if(click % 2 == 0){
    Header.href = "../css/header_White.css";
    Style.href = "../css/styles.css";
    Footer.href = "../css/footer_White.css";
    Shrek.style.filter = "invert(100%)";
    Burro.src = "../img/u.png"
    IMG.src = "../img/col-img3.jpg"
    click++;
    }
    else{
    Style.href = "../css/styles_Servicos.css";
    Shrek.style.filter = "invert(0%)";
    Burro.src = "../img/Hesko-remove.png"
    Header.href = "../css/header.css";
    Footer.href = "../css/footer.css";
    IMG.src = "../img/montana.png"
    click--; 
    }
}

function Preto(){
    const Header = document.getElementById("message");
    const Footer = document.getElementById("resist");
    const Style = document.getElementById("widen");
    const Burro = document.getElementById("Burro");
    if(click % 2 == 0){
    Header.href = "../css/header_White.css";
    Style.href = "../css/pag_white.css";
    Footer.href = "../css/footer_White.css";
    Burro.src = "../img/u.png"
    click++;
    }
    else{
    Style.href = "../css/pag_cliente.css";
    Burro.src = "../img/Hesko-remove.png";
    Header.href = "../css/header.css";
    Footer.href = "../css/footer.css";
    click--; 
    }
}

function COISA(){
    Email = document.getElementById("Email").value
    Pass = document.getElementById("pass").value
    const Img = document.getElementById("Calo")
    
    if( Email == "shrek" && Pass == "Burro" ){
        Img.style.transition = "5s"
        Img.style.transform = "scale(3.5)"
        Img.style.opacity = "100%"
        Img.style.zIndex = "100"
    }
    else if(Email == "" && Pass == ""){
        alert("Please enter your gmail and password")
    
    }
    else if (Email == "" && Pass !== "" ){
        alert("Not a valid Email! Please retry.")
    }
    else if (Email !== "" && Pass == "" ){
        alert("Not a valid Password! Please retry.")
    }
    else {
        window.location.href = "../index.html"
    }
}

function Igor_Overload(){
    const Daniel = document.getElementById("fotoD")
    const Matheus = document.getElementById("fotoM")
    const Gustavo = document.getElementById("fotoG")
    const Igor = document.getElementById("fotoI")
    const Derick = document.getElementById("fotoDe")

    Daniel.src = "../img/igor.png"
    Matheus.src = "../img/igor.png"
    Gustavo.src = "../img/igor.png"
    Derick.src = "../img/igor.png"

}