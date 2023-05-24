var reação = Number.parseFloat(window.prompt('Digite a nota de reação (0 a 100): '))
var memoria = Number.parseFloat(window.prompt('Digite a nota de memoria (0 a 100): '))
var comunicação = Number.parseFloat(window.prompt('Digite a nota de comunicação (0 a 100): '))
var visual = Number.parseFloat(window.prompt('Digite a nota de visual (0 a 100): '))

/*var reação = window.prompt('Digite a nota de reação: ')
var memoria = window.prompt('Digite a nota de Memória: ')
var comunicação = window.prompt('Digite a nota de Comunicação: ')
var visual = window.prompt('Digite a nota de Visual: ')*/

var nota_rea = document.getElementById('nota-reação')
var nota_mem = document.getElementById('nota-memoria')
var nota_com = document.getElementById('nota-comunicação')
var nota_vis = document.getElementById('nota-visual')
var comentario = document.getElementById('comentario')

var nota_rec = document.getElementById('nota-recebida')
var nota_final = (reação + memoria + comunicação + visual) / 4

nota_rea.innerHTML = `${reação}`
nota_mem.innerHTML = `${memoria}`
nota_com.innerHTML = `${comunicação}`
nota_vis.innerHTML = `${visual}`

nota_rec.innerHTML = `${Math.round(nota_final)}`

if (nota_final <= 40) {
    comentario.innerHTML = `Ruim`
} else if (nota_final <= 65){
    comentario.innerHTML = `Bom`
} else {
    comentario.innerHTML = `Ótimo`
}