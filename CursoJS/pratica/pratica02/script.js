titulo.innerHTML += ` \u{1F600}`

function calcular(){
    var num1 = document.getElementById('txtn1')
    var num2 = document.getElementById('txtn2')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(num1.value == 0 || num2.value == 0 || pas.value == 0){
        res.innerHTML = ('<p>Impossível contar!</p>')
    } else{ 
        res.innerHTML = ('<p>Contando: </p>')
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var p = Number(pas.value)

        if( p <= 0 ){
            alert('Passo inválido! Considerando PASSO como 1')
            p = 1
        } 
        if( n1 < n2) {
            //CONTAGEM CRESCENTE
            for(var c = n1; c <= n2; c += p){
                res.innerHTML += `${c} \u{25B6}`
            }
        
        } else {
            //CONTAGEM DECRESCENTE
            for(var c = n1; c >= n2; c -= p){
                res.innerHTML += `${c} \u{25B6}`
            }
        } 
        res.innerHTML += `\u{1F3C1}`
        res.style.paddingBottom = '10px'
    } 
}

