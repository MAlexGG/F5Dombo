document.addEventListener('click', function(event){
    let instrumento = event.target.dataset.instrumento;
    let sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
    
    sonido.currentTime= 0;
    sonido.play();
    
    
    console.log(instrumento);
 
    });




