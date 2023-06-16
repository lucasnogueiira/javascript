let num = document.querySelector('input#num')
let tabela = document.querySelector('select#tab')
let res = document.querySelector('div#res')
let numeros = []

function isNum(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNum(num.value) && !inLista(num.value, numeros)){
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tabela.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(numeros.length == 0){
        res.innerHTML = '<p>Por favor, adicione números na tabela!</p>'
    } else {
        let tot = numeros.length
        let maior = Math.max(...numeros)
        let menor = Math.min(...numeros)
        let soma = 0
        for(let i = 0; i < numeros.length; i++){
            soma += numeros[i]
        }
        let media = soma/tot
        let resultMedia = media.toString().slice(0, 5)

        res.innerHTML = `<p>Temos <strong>ao todo</strong>, ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O <strong>maior</strong> número é: ${maior}.</p>`
        res.innerHTML += `<p>O <strong>menor</strong> número é: ${menor}.</p>`
        res.innerHTML += `<p>A <strong>soma</strong> dos números é: ${soma}.</p>`
        res.innerHTML += `<p>A <strong>media</strong> dos números é: ${resultMedia}.</p>`
    }
}
