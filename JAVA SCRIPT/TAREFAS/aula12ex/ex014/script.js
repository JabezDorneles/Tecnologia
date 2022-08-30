function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} hora.`
if (hora <12){
    // BOM DIA!
    img.src = 'manha.png'
} else if (hora <18){
    // BOA TARDE!
    img.src = 'tarde.png'
} else {
    // BOA NOITE!
    img.src = 'noite.png'
}
}