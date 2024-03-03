document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer para animaciones al entrar en el viewport
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          } else {
              entry.target.classList.remove('animate');
          }
      });
  }, { threshold: 0.1 });

  // Observar todas las secciones de servicios
  const sections = document.querySelectorAll('.service-section');
  sections.forEach(section => observer.observe(section));

  // Toggle para la barra de navegación en dispositivos móviles
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  menuToggle.addEventListener('click', () => navbar.classList.toggle('active'));

  // Inicializa cualquier biblioteca o plugin aquí
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
      // 'offset' (en px) es la distancia desde el elemento original 
      // hasta el punto donde se dispara la animación.
      offset: 120, // Puedes ajustar este valor según tu preferencia.
    
      // 'duration' (en milisegundos) controla cuánto tiempo dura la animación.
      duration: 600, // Normalmente entre 400 y 1200 ms funciona bien.
    
      // 'easing' es la curva de velocidad de la animación.
      easing: 'ease-in-out', // 'ease', 'ease-in', 'ease-out', 'linear', etc.
    
      // 'delay' (en milisegundos) agrega un retraso al inicio de la animación.
      delay: 100, // Puede ser específico para cada elemento o general.
    
      // 'once' define si la animación debe suceder solo una vez o cada vez que se hace scroll.
      once: false, // Cambia a 'true' si solo quieres que la animación ocurra una vez.
    
      // 'mirror' permite que las animaciones se ejecuten cuando se hace scroll hacia arriba.
      mirror: false, // Cambia a 'true' si quieres animar al hacer scroll hacia arriba.
    
      // 'anchorPlacement' define cómo se calcula la posición del elemento para iniciar la animación.
      anchorPlacement: 'top-bottom', // Opciones: 'top-bottom', 'top-center', 'center-bottom', etc.
    });
    

    $('.your-slider-class').slick({
      slidesToShow: 3, // Número de slides que se muestran a la vez
      slidesToScroll: 1, // Número de slides que se desplazan en cada movimiento
      autoplay: true, // Activa el autoplay para desplazar los slides automáticamente
      autoplaySpeed: 2000, // Velocidad del autoplay (2000 milisegundos = 2 segundos)
      dots: true, // Muestra puntos de navegación en la parte inferior del carrusel
      arrows: true, // Muestra flechas de navegación a los lados del carrusel
      responsive: [ // Ajusta la configuración para diferentes tamaños de pantalla
        {
          breakpoint: 1024, // Dispositivos con pantalla hasta 1024px
          settings: {
            slidesToShow: 2, // Muestra 2 slides a la vez en pantallas medianas
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600, // Dispositivos con pantalla hasta 600px
          settings: {
            slidesToShow: 1, // Muestra 1 slide a la vez en pantallas pequeñas
            slidesToScroll: 1,
          }
        }
      ],
      pauseOnFocus: true, // Pausa el autoplay cuando un slide obtiene el foco
      pauseOnHover: true, // Pausa el autoplay cuando se pasa el ratón por encima
      fade: false, // Desactivado por defecto, pero puedes activarlo para efecto de desvanecimiento en lugar de deslizamiento
      adaptiveHeight: true, // Ajusta la altura del carrusel de manera dinámica según el contenido del slide
    });

    $(document).ready(function(){
      $('.projects-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1
                  }
              }
          ]
      });
  });

$('[data-fancybox="gallery"]').fancybox({
  loop: true, // Permite que la galería se "bucle" o "ciclo" sin fin.
  buttons: [
    "zoom", // Muestra un botón para hacer zoom en la imagen.
    "share", // Muestra opciones para compartir (si son aplicables).
    "slideShow", // Permite a los usuarios iniciar una presentación de diapositivas.
    "fullScreen", // Habilita el botón para ver la galería en pantalla completa.
    "download", // Ofrece un botón para descargar la imagen (si se desea permitir).
    "thumbs", // Muestra miniaturas de las imágenes de la galería.
    "close" // Muestra el botón para cerrar el lightbox.
  ],
  keyboard: true, // Permite la navegación a través del teclado.
  protect: true, // Previene que las imágenes se descarguen mediante clic derecho.
  slideShow: {
    autoStart: false, // Define si la presentación de diapositivas comienza automáticamente.
    speed: 3000 // Velocidad de transición entre imágenes en milisegundos.
  },
  animationEffect: "zoom", // Efecto de animación al abrir/cerrar imágenes (puede ser "zoom", "fade", "circular", etc.).
  transitionEffect: "slide", // Efecto de transición entre imágenes (puede ser "slide", "fade", "circular", etc.).
  mobile: {
    preventCaptionOverlap: false,
    idleTime: false,
    clickContent: function(current, event) {
      return current.type === "image" ? "toggleControls" : "close";
    },
    clickSlide: "close",
    dblclickContent: false,
    dblclickSlide: false
  }
});

$('.js-tilt').tilt({
  maxTilt: 20, // Máximo ángulo de inclinación (grados).
  perspective: 1000, // Distancia de la perspectiva en px, afecta la profundidad del efecto.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Curva de velocidad para el movimiento de inclinación.
  scale: 1.05, // Escala el elemento al inclinarse.
  speed: 300, // Velocidad de la transición de inclinación.
  transition: true, // Si es 'true', habilita la transición/animación suave del efecto de inclinación.
  disableAxis: null, // Puedes deshabilitar el eje 'x' o 'y' para limitar la dirección de inclinación.
  reset: true, // Si es 'true', el elemento se restablece a su estado inicial al dejar de interactuar.
  glare: true, // Habilita un efecto de brillo sobre el elemento al inclinarse.
  maxGlare: .5, // Máxima opacidad del brillo (0 a 1).
  glarePrerender: false, // Si es 'true', el brillo se agrega antes de cualquier interacción (puede mejorar el rendimiento).
  gyroscope: true, // Permite la interacción con el movimiento del dispositivo en dispositivos móviles.
  gyroscopeMinAngleX: -45, // Mínimo ángulo en X antes de que inicie el efecto.
  gyroscopeMaxAngleX: 45, // Máximo ángulo en X para el efecto.
  gyroscopeMinAngleY: -45, // Mínimo ángulo en Y antes de que inicie el efecto.
  gyroscopeMaxAngleY: 45, // Máximo ángulo en Y para el efecto.
});

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
      const backgroundColor = 'rgba(45, 45, 45, 1)'; // Opacidad fija en 1
      navbar.style.background = `linear-gradient(to right, ${backgroundColor}, ${backgroundColor})`;
});



  