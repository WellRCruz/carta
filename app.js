/**
 *  Sorteio de uma carta
 * Exemplo de uso de um vetor
 * @author Wellington R. Cruz
 */

function sortear() {
    let nipes = ['♥', '♦', '♣', '♠']
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    // Sorteio do índice vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)] //Indices que podem ser sorteados 0,1,2 e 3
    let faceSorteada = faces[Math.floor(Math.random() * 13)] //Indices que podem ser sorteados 0,1,2 até o 13

    // console.log(`${faceSorteada} de ${nipeSorteado}`)

    // Determinar a cor com base no nipe sorteado
    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }

    // Renderizar o canto superior esquerdo da carta
    // A linha abaixo adiciona a div identificada como 'supEsq' a face e o nipe sorteado e também tags <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    // A linha abaixo muda o css ref a tag identificada
    document.getElementById('supEsq').style.cor = cor

    // Renderizar o centro da carta
    let cc = document.getElementById('centroCarta')
    
    if (faceSorteada === 'J'){ 
        cc.innerHTML =`<img src=".img/valete.png>`
    } else if (faceSorteada === 'Q') {
        cc.innerHTML =`<img src=".img/dama.png>`
    } else if (faceSorteada === 'K') {
        cc.innerHTML =`<img src=".img/rei.png>`
    } else {
        cc.innerHTML = `${nipeSorteado}`
    }

    // Renderizar o canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>` 
    document.getElementById('infDir').style.cor = cor
}