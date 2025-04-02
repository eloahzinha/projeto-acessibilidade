document.addEventListener ('DOMContentLoaded'), function (){
    let tamanhoAtualFonte = 1;
    const aumentaBoatao = document.getElementById ('aumentar-fonte');
    aumentaFonteBoatao.addEventListener('click', function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `$(tamanhoAtualFonte)rem`
    })
    const diminuirBoatao = document.getElementById ('diminuir-fonte');
    diminuirFonteBoatao.addEventListener('click', function(){
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize = `$(tamanhoAtualFonte)rem`
    })
}
