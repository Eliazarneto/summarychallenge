
function calcular() {
    //pega a variavel do input
    var rea = parseInt(document.getElementById('rea').value)
    var mem = parseInt(document.getElementById('mem').value)
    var com = parseInt(document.getElementById('com').value)
    var vis = parseInt(document.getElementById('vis').value)  
    //pega a variavel do html - parte das notas a ser alterada
    var nota_rea = document.getElementById('nota-reação')
    var nota_mem = document.getElementById('nota-memoria')
    var nota_com = document.getElementById('nota-comunicação')
    var nota_vis = document.getElementById('nota-visual')
    var comentario = document.getElementById('comentario')
    //botão que puxa a variavel digitar notas
    var digit = document.getElementById('btndigitar')
    //comando que faz o botao aparecer ou sumir após o click -  deveria sumir
    if(digit.style.display === 'block') {
        digit.style.display = 'none'
    } else {
        digit.style.display = 'block'
    }
    //alerta para as notas digitadas erradas
    //nao faz o calculo caso os valores estejam fora dos parametros
    if (rea > 100 || rea < 0) {
        window.alert('Digite uma nota entre 1 a 100 para reação')
        document.location.reload(forceReload);
    }

    if (mem > 100 || mem < 0) {
        window.alert('Digite uma nota entre 1 a 100 para memória')
        document.location.reload(forceReload);
    }

    if (com > 100 || com < 0) {
        window.alert('Digite uma nota entre 1 a 100 para comunicação')
        document.location.reload(forceReload);
    }

    if (vis > 100 || vis < 0) {
        window.alert('Digite uma nota entre 1 a 100 para visual')
        document.location.reload(forceReload);
    }
    //variaveis da parte dos resultados
    var nota_rec = document.getElementById('nota-recebida')
    var nota_final = (rea + mem + com + vis) / 4
    //aqui ele substituo o conteudo das notas, que está em branco com os valores digitados
    nota_rea.innerHTML = `${rea}`
    nota_mem.innerHTML = `${mem}`
    nota_com.innerHTML = `${com}`
    nota_vis.innerHTML = `${vis}`
    //substitui a nota recebida (que fica dentro do circulo), com a média das notas
    nota_rec.innerHTML = `${Math.round(nota_final)}`
    //comentarios a partir da porcentagem acertada de questões
    if (nota_final <= 40) {
        comentario.innerHTML = `Ruim`
    } else if (nota_final <= 65){
        comentario.innerHTML = `Bom`
    } else {
        comentario.innerHTML = `Ótimo`
    }
    
    
 }

//function que da um display=block a div de digitação de notas 
function Digitarnotas() {
    var digitaçao = document.getElementById('introduzir')

    if (digitaçao.style.display == 'none') {
        digitaçao.style.display = 'block'
    } else {
        digitaçao.style.display = 'none'
    }
 }      





