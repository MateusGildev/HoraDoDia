function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.innerHTML = '<img src="manha.jpg">'
        document.body.style.backgroundColor ='#e2cd9f'
    } else if (hora>=12 && hora < 18){
        //boa tarde
        img.innerHTML = '<img src="tarde.jpg">'
        document.body.style.backgroundColor ='#b9846f'
    } else{
        //boa noite
        img.innerHTML = '<img src="noite.jpg">'
        document.body.style.backgroundColor ='#515154'
    }
}


