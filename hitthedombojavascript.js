document.addEventListener('click', function(event){
    let instrumento = event.target.dataset.instrumento;
 
    const sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
    sonido.play();

    console.log(instrumento);
 
    });




