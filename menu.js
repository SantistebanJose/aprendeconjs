document.addEventListener('DOMContentLoaded', () => {
    // Código existente para el menú
    const menuBtn = document.querySelector('.fa-bars');
    const menu = document.querySelector('.menu');
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    const toggleMenu = () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    };

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && menu.classList.contains('active')) {
            toggleMenu();
        }
    });

    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Código para ampliar la imagen al hacer clic en el ícono del ojo
    document.querySelectorAll('.fa-eye').forEach(icon => {
        icon.addEventListener('click', function() {
            const card = this.closest('.card-product'); // Encuentra la tarjeta más cercana
            const img = card.querySelector('.container-img img'); // Selecciona la imagen dentro de la tarjeta

            // Alterna la clase de zoom
            img.classList.toggle('image-zoom');
        });
    });
});







// conteo de corazones
// Contador de corazones
document.addEventListener('DOMContentLoaded', () => {
    // Contador de corazones
    const heartIcons = document.querySelectorAll('.heart-icon');

    // Función para mostrar el conteo actualizado
    function showHeartCount() {
        heartIcons.forEach(icon => {
            const heartCount = localStorage.getItem(icon.getAttribute('data-id')) || 0;
            icon.querySelector('.heart-count').textContent = heartCount;
        });
    }

    // Mostrar el conteo actualizado al cargar la página
    showHeartCount();

    // Agregar evento de clic a cada corazón
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.toggle('selected');
            let count = parseInt(localStorage.getItem(this.getAttribute('data-id'))) || 0;

            // Asegúrate de que count sea un número
            if (isNaN(count)) {
                count = 0; // Reiniciar a 0 si es NaN
            }

            if (this.classList.contains('selected')) {
                count++;
            } else {
                count--;
            }

            // Almacenar el nuevo conteo en localStorage
            localStorage.setItem(this.getAttribute('data-id'), count);
            this.querySelector('.heart-count').textContent = count;
        });
    });
});


/** compartir */
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.card-product');

    products.forEach((product) => {
        const shareButton = product.querySelector('.button-group .fa-code-compare'); // Cambiado para seleccionar el icono de compartir
        const productUrl = product.querySelector('.btn-download').href; // URL del producto
        const title = product.querySelector('h3').textContent; // Título del producto
        const description = product.querySelector('.description').textContent; // Descripción del producto

        if (shareButton) { // Verifica que el botón de compartir exista
            shareButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Evita que el clic se propague al documento

                const text = `Mira este increíble producto: ${title}\nDescripción: ${description}`; // Texto que se va a compartir

                if (navigator.share) {
                    navigator.share({
                        title: title,
                        text: text,
                        url: productUrl,
                    })
                    .then(() => console.log('Compartido con éxito'))
                    .catch((error) => console.error('Error al compartir:', error));
                } else {
                    alert('La API de compartir no es compatible con este navegador. Copia la URL: ' + productUrl);
                }
            });
        }
    });
});




/* editores funcion */
document.getElementById('toggle-editors').addEventListener('click', function() {
    const editorContainer = document.getElementById('editor-container');
    const button = this;
    const newText = "¿Quieres personalizar tus códigos? ¡Descubre cómo hacerlo aquí!";
    const hideText = "Ocultar Editores";
    
    if (editorContainer.style.display === 'none') {
        editorContainer.style.display = 'grid'; // Muestra los editores
        typeWriter(button, hideText); // Efecto máquina de escribir al mostrar
    } else {
        editorContainer.style.display = 'none'; // Oculta los editores
        typeWriter(button, newText); // Efecto máquina de escribir al ocultar
    }
});

// Función para efecto máquina de escribir
function typeWriter(element, text) {
    element.textContent = ''; // Limpia el contenido actual
    let index = 0;

    const typingEffect = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(typingEffect); // Detiene el efecto cuando se completa
        }
    }, 50); // Velocidad de escritura en milisegundos
}

    
/**********funcinalidad de la pregunta editores del idex al codigos.html */

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const showEditors = params.get('showEditors');

    if (showEditors) {
        const editorContainer = document.getElementById('editor-container');
        editorContainer.style.display = 'grid'; // Muestra los editores
    }
});




/* modal*/
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    modal.style.animation = 'fadeIn 0.3s ease reverse';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Mostrar el modal automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal-overlay');
    modal.style.display = 'flex';
});