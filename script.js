document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de bibliotecas y plugins

    // Animate On Scroll (AOS)
    AOS.init({
        offset: 120,
        duration: 600,
        easing: 'ease-in-out',
        delay: 100,
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });

    $(document).ready(function(){
        $('.testimonialsSlider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            centerMode: true,
            centerPadding: '60px',
            variableWidth: false,
            responsive: [
                { 
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
            ]    
        });
    });
    
    
    // Fancybox para galerías
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        buttons: ["zoom", "share", "slideShow", "fullScreen", "download", "thumbs", "close"],
        keyboard: true,
        protect: true,
        slideShow: { autoStart: false, speed: 3000 },
        animationEffect: "zoom",
        transitionEffect: "slide",
        mobile: {
            preventCaptionOverlap: false,
            idleTime: false,
            clickContent: (current, event) => current.type === "image" ? "toggleControls" : "close",
            clickSlide: "close",
        }
    });

    // Tilt.js para efectos de inclinación
    $('.js-tilt').tilt({
        maxTilt: 20,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1.05,
        speed: 300,
        transition: true,
        glare: true,
        maxGlare: .5
    });

    // Funcionalidades específicas

      // Ajustar títulos y subtítulos de elementos del carrusel
  document.querySelectorAll('.carousel-item').forEach((item, index) => {
    const title = item.querySelector('h5');
    const subtitle = item.querySelector('p');
    title.textContent = titles[index];
    subtitle.textContent = subtitles[index];
});

    // Toggle para la barra de navegación en dispositivos móviles
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Event listeners para los botones de navegación del carrusel
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    
    if (prevButton) {
        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
    }

});

// Ajustes de navegación y efectos visuales que dependen del scroll
    // Escucha el evento de scroll y ajusta la altura de la barra de navegación
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.style.height = '90px'; // Cambia la altura al hacer scroll
        } else {
            navbar.style.height = '150px'; // Restaura la altura inicial cuando se encuentra en la parte superior
        }
    
        // Ajusta la opacidad basada en la altura
        const maxOpacityScroll = 100; // Puedes ajustar esto según tu preferencia
        const opacity = Math.min(1, window.scrollY / maxOpacityScroll);
        const backgroundColor = 'rgba(45, 45, 45, 1)'; // Opacidad fija en 1
        navbar.style.background = `linear-gradient(to right, ${backgroundColor}, ${backgroundColor})`;

    });
    

// Carrusel de iconos con tiempo de intervalo
const intervalTime = 3000;
const iconSlides = document.getElementsByClassName('carousel-icon-slide');
let currentIconSlide = 0;

function showNextIconSlide() {
    if (iconSlides[currentIconSlide]) {
        iconSlides[currentIconSlide].classList.remove('active');
    }
    
    currentIconSlide = (currentIconSlide + 1) % iconSlides.length;

    if (iconSlides[currentIconSlide]) {
        iconSlides[currentIconSlide].classList.add('active');
    }
}

// Iniciar el carrusel automáticamente
setInterval(showNextIconSlide, intervalTime);

// Event listener para mostrar/ocultar submenús
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        this.querySelector('.sub-menu').classList.toggle('show');
    });
});

// Funciones relacionadas con la internacionalización y carga de contenido

function setBlog(id) {
    localStorage.setItem("blog-id", id);
}