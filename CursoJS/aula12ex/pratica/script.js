function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value < 1900 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 26){
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 55){
                img.setAttribute('src', 'homemadulto.png')
            } else{
                img.setAttribute('src', 'homemidoso.png')
            }

            } else {
                genero = 'Mulher'
                if(idade >= 0 && idade < 12){
                    img.setAttribute('src', 'mulhercrianca.png')
                } else if (idade < 26){
                    img.setAttribute('src', 'mulherjovem.png')
                } else if (idade < 55){
                    img.setAttribute('src', 'mulheradulta.png')
                } else{
                    img.setAttribute('src', 'mulheridosa.png')
                }
            }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
                
        }
    }
