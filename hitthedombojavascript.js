document.addEventListener('click', function(event){
    let instrumento = event.target.dataset.instrumento;

    sonido.currentTime= 0;
 
    const sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
    sonido.play();
    
    

    console.log(instrumento);
 
    });




