document.addEventListener('DOMContentLoaded', function() {
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

    AOS.init();

    $('.portfolioSliderOne').slick({
        slidesToShow: 2, // Número de imágenes visibles a la vez
        slidesToScroll: 1, // Número de imágenes a desplazar
        prevArrow: $('.prev_c'), // Elemento de flecha izquierda
        nextArrow: $('.next_c'), // Elemento de flecha derecha
        responsive: [
            {
                breakpoint: 768, // Ajustes para dispositivos móviles
                settings: {
                    slidesToShow: 1
                }
            }
            // Puedes agregar más ajustes responsivos según sea necesario
        ]
    });

    $("[data-fancybox]").fancybox({
        afterShow: function(instance, current) {
            // Lógica para inicializar el formulario (puedes agregar código aquí)
        }, 
        clickOutside: "close", // Cierra FancyBox al hacer clic fuera del contenido
        touch: false // Deshabilita el cierre táctil, puedes cambiarlo si es necesario
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        // Lógica de validación del formulario
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos.");
            event.preventDefault();
            return;
        }

        // Lógica de envío del formulario (puedes agregar código aquí)
        alert("Formulario enviado (agrega tu lógica aquí)");
        $.fancybox.close(); // Cierra FancyBox después de enviar el formulario
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    });

    $('.js-tilt').tilt();

    const titles = [
        "Transformando Datos en Decisiones Inteligentes",
        "Innovación con Inteligencia Artificial",
        "Consultoría Estadística Experta"
    ];

    const subtitles = [
        "Descubre cómo nuestra ciencia de datos impulsa el crecimiento del negocio.",
        "Implementa soluciones de IA que crean valor real y sostenible.",
        "Soluciones estadísticas precisas para desafíos complejos del mercado."
    ];

        // Función para mostrar progresivamente los títulos y subtítulos
        function showCaptionProgressively() {
            const captions = document.querySelectorAll('.carousel-caption');
    
            captions.forEach(caption => {
                caption.classList.add('show'); // Agrega la clase 'show' para mostrar progresivamente
            });
        }
    
        // Llama a la función después de un breve retraso (puedes ajustar el tiempo según tus preferencias)
        setTimeout(showCaptionProgressively, 500);

    document.querySelectorAll('.carousel-item').forEach((item, index) => {
        const title = item.querySelector('h5');
        const subtitle = item.querySelector('p');
        title.textContent = titles[index];
        subtitle.textContent = subtitles[index];
    });

});

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



