document.addEventListener('DOMContentLoaded', function() {
    // Toggle para la barra de navegación en dispositivos móviles
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('active'); // Añade o elimina la clase 'active'
      navbarLinks.classList.toggle('active'); // Añade o elimina la clase 'active' para mostrar u ocultar los enlaces de navegación
    });


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
    
    // Definir títulos y subtítulos fuera del bucle forEach
    const titles = ['Transformando Datos en Decisiones Inteligentes', 'Innovación con Inteligencia Artificial', 'Consultoría Estadística Experta'];
    const subtitles = ['Descubre cómo nuestra ciencia de datos impulsa el crecimiento del negocio', 'Implementa soluciones de IA que crean valor real y sostenible', 'Soluciones estadísticas precisas para desafíos complejos'];

    // Ajustar títulos y subtítulos de elementos del carrusel
    document.querySelectorAll('.carousel-item').forEach((item, index) => {
        const title = item.querySelector('h5');
        const subtitle = item.querySelector('p');
        if (title) title.textContent = titles[index]; // Añadido chequeo de existencia
        if (subtitle) subtitle.textContent = subtitles[index]; // Añadido chequeo de existencia
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


document.addEventListener('scroll', function() {
    var servicesSection = document.getElementById('services'); // Asegúrate de que tu sección de servicios tenga este ID
    var whatsappIcon = document.querySelector('.whatsapp-icon');
    
    var sectionTop = servicesSection.getBoundingClientRect().top; // Obtiene la posición de la sección de servicios
    var isVisible = sectionTop - window.innerHeight < 0; // Comprueba si la sección está visible
    
    if (isVisible) {
        whatsappIcon.style.display = 'flex'; // Muestra el ícono de WhatsApp
    } else {
        whatsappIcon.style.display = 'none'; // Oculta el ícono si la sección de servicios no está visible
    }
});



