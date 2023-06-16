let num = document.getElementById('txtn')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
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
    if(isNumero(num.value) && !inLista(num.value, valores)){ //! SIGFNIFCA SE NAO ESTIVER
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido, ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
          }
        let media = soma/tot 

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`
    }
}  