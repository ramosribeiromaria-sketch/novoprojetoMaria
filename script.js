//CÓDIGO DO MODAL
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");
btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);

function abreModal(){
    modal.style.display="block";
}

function fechaModal(){
    modal.style.display="none";
}

//TAMANHO DE FONTES
let tamanhoFonteAtual=16;
const valorAdicionado=2;
const valorSubtraido=2;
let btnAumentaFonte=
document.getElementByld("btnAumentaTexto");
let btnDiminuiFonte =
document.getElementByld("btnDiminuiTexto");
btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);
