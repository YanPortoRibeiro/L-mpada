let ligar = document.getElementById('ligar')
let desligar = document.getElementById('desligar')
let lampada = document.getElementById('lamp')

function ligarlampada () { // função ligar lâmpada, ela troca a imagem de desligada para ligada
    lampada.src = './img/ligada.jpg' // chama a imagem ligada
}

function desligarlampada () { // função desligar lâmpada, ela troca a imagem de ligada para desligada
    lampada.src = './img/desligada.jpg' // chama a imagem desligada
}

function lampadaquebrada () { // função quebrar lâmpada, ele troca a imagem para uma quebrada
    lampada.src = './img/quebrada.jpg' // chama a imagem quebrada
}

ligar.addEventListener('click', ligarlampada) // tem a função da chamar o click do ligar, para trocar a imagem da lâmpada e ligar ela
desligar.addEventListener('click', desligarlampada) // tem a função de chamar o click do desligar, para trocar a imagem da lâmpada e desligar ela
lampada.addEventListener('mouseover', ligarlampada) // quando entra no campo ativa a função ligar lampada 
lampada.addEventListener('mouseleave', desligarlampada) // quando sai do campo ativa a função desligar lampada
lampada.addEventListener('dblclick', lampadaquebrada) // quando é usado o duplo clique do mouse ativamos a função quebrar lâmpada

// mouseover = quando passa o mouse por cima do elemento, imagem ou campo do código ele realiza a função desejada
// mouseleave = quando o mouse sai de cima do elemento, imagem ou campo do código ele realiza a função desejada
// dbclick = quando o mouse é clicado duas vezes ativamos a função
// click = quando o mouse é clicado uma vez ativamos a função