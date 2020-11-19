document.addEventListener('click', function(event){
    let instrumento = event.target.dataset.instrumento;
 
    const sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
    sonido.play();
    sonido.currentTime= 0;

    console.log(instrumento);
 
    });




