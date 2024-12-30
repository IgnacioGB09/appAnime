let slider = document.getElementById('slider');
let sliderD = document.getElementById('sliderD');
let izquierda = document.getElementById('botonI');
let derecha = document.getElementById('botonD');
let sliderItems = slider.children; // Obtenemos los elementos hijos del carrusel
let sliderCount = sliderItems.length; // Contamos las tarjetas
let sliderIndex = 0; // Índice actual del carrusel
let botonI = document.getElementById('Iboton');
let botonD = document.getElementById('Dboton');


    
        izquierda.addEventListener('click', () => {
            sliderIndex = (sliderIndex - 1 + sliderCount) % sliderCount; // Ajustamos el índice al moverse a la izquierda
            let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
            slider.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
        });
        derecha.addEventListener('click', () => {
            sliderIndex = (sliderIndex + 1) % sliderCount; // Ajustamos el índice al moverse a la derecha
            let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
            slider.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
        });

        botonI.addEventListener('click', () => {
            sliderIndex = (sliderIndex - 1 + sliderCount) % sliderCount; // Ajustamos el índice al moverse a la izquierda
            let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
            sliderD.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
        });
        botonD.addEventListener('click', () => {
            sliderIndex = (sliderIndex + 1) % sliderCount; // Ajustamos el índice al moverse a la derecha
            let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
            sliderD.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
        });

