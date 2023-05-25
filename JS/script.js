
function calcular() {

    var rea = parseInt(document.getElementById('rea').value)
    var mem = parseInt(document.getElementById('mem').value)
    var com = parseInt(document.getElementById('com').value)
    var vis = parseInt(document.getElementById('vis').value)  

    var nota_rea = document.getElementById('nota-reação')
    var nota_mem = document.getElementById('nota-memoria')
    var nota_com = document.getElementById('nota-comunicação')
    var nota_vis = document.getElementById('nota-visual')
    var comentario = document.getElementById('comentario')

    var digit = document.getElementById('btndigitar')

    if(digit.style.display === 'block') {
        digit.style.display = 'none'
    } else {
        digit.style.display = 'block'
    }

    if (rea > 100 || rea < 0) {
        window.alert('Digite uma nota entre 1 a 100 para reação')
    }

    if (mem > 100 || mem < 0) {
        window.alert('Digite uma nota entre 1 a 100 para memória')
    }

    if (com > 100 || com < 0) {
        window.alert('Digite uma nota entre 1 a 100 para comunicação')
    }

    if (vis > 100 || vis < 0) {
        window.alert('Digite uma nota entre 1 a 100 para visual')
    }

    var nota_rec = document.getElementById('nota-recebida')
    var nota_final = (rea + mem + com + vis) / 4

    nota_rea.innerHTML = `${rea}`
    nota_mem.innerHTML = `${mem}`
    nota_com.innerHTML = `${com}`
    nota_vis.innerHTML = `${vis}`

    nota_rec.innerHTML = `${Math.round(nota_final)}`

    if (nota_final <= 40) {
        comentario.innerHTML = `Ruim`
    } else if (nota_final <= 65){
        comentario.innerHTML = `Bom`
    } else {
        comentario.innerHTML = `Ótimo`
    }
    
    
 }

 
function Digitarnotas() {
    var digitaçao = document.getElementById('introduzir')

    if (digitaçao.style.display == 'none') {
        digitaçao.style.display = 'block'
    } else {
        digitaçao.style.display = 'none'
    }
 }      





