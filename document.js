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

    // Slick Slider para una clase específica (ajusta '.your-slider-class' según tu HTML)
    $('.your-slider-class').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ],
        pauseOnFocus: true,
        pauseOnHover: true,
        adaptiveHeight: true,
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

    // jQuery CountTo para contadores
    $('.counter').countTo({
        from: 0,
        to: 1000,
        speed: 2000,
        refreshInterval: 50,
        formatter: (value, options) => value.toFixed(options.decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        onUpdate: (value) => console.log('El contador se ha actualizado a: ' + value),
        onComplete: (value) => console.log('La animación del contador ha finalizado con el valor: ' + value)
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

    // Toggle para la barra de navegación en dispositivos móviles
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Funcionalidad del carrusel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    const heroCarousel = document.querySelector('.hero-carousel');

    function showSlide(index) {
        index = (index + totalSlides) % totalSlides; // Manejo circular de índices
        heroCarousel.style.transform = `translateX(${-index * 100}%)`;
        currentSlide = index;
    }

    // Event listeners para los botones de navegación del carrusel
    document.querySelector('.carousel-control.prev').addEventListener('click', () => showSlide(currentSlide - 1));
    document.querySelector('.carousel-control.next').addEventListener('click', () => showSlide(currentSlide + 1));

    // Inicializa el carrusel en el primer slide
    showSlide(currentSlide);

    // Opcional: Función para automatizar el carrusel
    function autoPlayCarousel() {
        showSlide(currentSlide + 1);
    }

    // Inicia el carrusel automático con un intervalo de 5 segundos
    let playInterval = setInterval(autoPlayCarousel, 5000);

    // Opcional: Event listeners para pausar/reanudar el carrusel automático
    document.querySelector('.hero-carousel').addEventListener('mouseenter', () => clearInterval(playInterval));
    document.querySelector('.hero-carousel').addEventListener('mouseleave', () => playInterval = setInterval(autoPlayCarousel, 5000));

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
        const opacity = Math.min(1, scrollPosition / maxOpacityScroll);
        const backgroundColor = `rgba(45, 45, 45, ${0.8 * (1 - opacity)})`;
        navbar.style.background = `linear-gradient(to right, ${backgroundColor}, ${backgroundColor})`;
});

// Carrusel de iconos con tiempo de intervalo
const intervalTime = 3000;
const iconSlides = document.getElementsByClassName('carousel-icon-slide');
let currentIconSlide = 0;

function showNextIconSlide() {
    iconSlides[currentIconSlide].classList.remove('active');
    currentIconSlide = (currentIconSlide + 1) % iconSlides.length;
    iconSlides[currentIconSlide].classList.add('active');
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
function load() {
    const translate = new Translate();
    const attributeName = "data-tag";
    translate.init(attributeName, localStorage.getItem("language") || "en");
    translate.process();
}

function setLanguage(lang) {
    localStorage.setItem("language", lang);
    load();
}

function setBlog(id) {
    localStorage.setItem("blog-id", id);
}
