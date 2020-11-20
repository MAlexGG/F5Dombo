document.addEventListener('click', function(event){
    let instrumento = event.target.dataset.instrumento;
    let sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
    let animacion = document.getElementById(instrumento);
    



    animacion.classList.add("magicOlive");

    animacion.classList.remove("magicOlive");
    
    sonido.currentTime= 0;
    sonido.play();

   
    
    

    console.log(instrumento);
 
    });


        



