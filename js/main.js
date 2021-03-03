    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
        
    });

    //jquery for de hamburguer menu
    $('.hamburger').on('click', function() {
    $('.navegation').slideToggle();
    });

    let contenedorImagen = document.querySelector('.header-img')
    if(screen.width < 768){
        contenedorImagen.src = '../images/icons/logo1.svg'
        console.log('cargué el logo')
    }else{
        contenedorImagen.src = '../images/icons/logo2.svg'
    }
