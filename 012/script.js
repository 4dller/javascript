

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 &&  hora < 12 ) {

        img.src ='manhã.png'
        window.document.body.style.background = '#8ec4e6'
    }
    else if ( hora >= 12 && hora <= 18) {

        img.src = 'tarde.png'
        window.document.body.style.background = '#85825d'
        
    }
    else {
        img.src = 'noite.png'
        window.document.body.style.background = '#8e0122'


    }
}