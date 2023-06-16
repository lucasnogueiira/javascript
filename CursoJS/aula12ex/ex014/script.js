function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora < 6){
         //boa madrugada
        msg.innerHTML = `Boa madrugada! Agora são ${hora} horas.`
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#403557'
    } else if(hora >= 6 && hora < 12){
        // bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'fotomanha.png'
        document.body.style.background = '#9eb8b9'
    } else if (hora >= 12 && hora <= 18){
        // boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = 'fototarde.png'
        document.body.style.background = '#df9f5b'
    } else{
        // boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'fotonoite.png'
        document.body.style.background = '#12181e'
    }
    
        
    
}
