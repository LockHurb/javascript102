"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }

    

};

// Función para poblar el elemento select con los nombres de los ítems
function poblarSelect() {
    const elementoSelect = document.getElementById('items');
    
    // Recorrer el objeto itemData
    Object.keys(itemData).forEach(clave => {
        const item = itemData[clave];
        
        // Crear un nuevo elemento option
        const opcion = document.createElement('option');
        opcion.value = clave; // Usar la clave (item1, item2, item3) como valor
        opcion.textContent = item.name; // Usar el nombre como texto visible
        
        // Agregar la opción al elemento select
        elementoSelect.appendChild(opcion);
    });
}

// Función para manejar el cambio de selección y actualizar la visualización
function manejarCambioSelect() {
    const elementoSelect = document.getElementById('items');
    const claveSeleccionada = elementoSelect.value;
    
    if (claveSeleccionada !== '-1' && itemData[claveSeleccionada]) {
        const itemSeleccionado = itemData[claveSeleccionada];
        
        // Actualizar los elementos de visualización
        document.getElementById('displayImage').src = itemSeleccionado.image;
        document.getElementById('photographer').value = itemSeleccionado.photographer;
        document.getElementById('description').value = itemSeleccionado.description;
        document.getElementById('score').value = itemSeleccionado.score;
    }
}

// Función para aumentar el puntaje del ítem seleccionado
function aumentarPuntaje() {
    const elementoSelect = document.getElementById('items');
    const claveSeleccionada = elementoSelect.value;
    
    if (claveSeleccionada !== '-1' && itemData[claveSeleccionada]) {
        // Aumentar el puntaje en 1
        itemData[claveSeleccionada].score += 1;
        
        // Actualizar el campo visual del puntaje
        document.getElementById('score').value = itemData[claveSeleccionada].score;
    }
}

// Función para disminuir el puntaje del ítem seleccionado
function disminuirPuntaje() {
    const elementoSelect = document.getElementById('items');
    const claveSeleccionada = elementoSelect.value;
    
    if (claveSeleccionada !== '-1' && itemData[claveSeleccionada]) {
        // Disminuir el puntaje en 1
        itemData[claveSeleccionada].score -= 1;
        
        // Actualizar el campo visual del puntaje
        document.getElementById('score').value = itemData[claveSeleccionada].score;
    }
}

// Inicializar la aplicación cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    // Poblar el elemento select con los ítems
    poblarSelect();
    
    // Agregar listener para detectar cambios en el select
    document.getElementById('items').addEventListener('change', manejarCambioSelect);
    
    // Agregar listeners para los botones de votación
    document.getElementById('increaseScore').addEventListener('click', aumentarPuntaje);
    document.getElementById('decreaseScore').addEventListener('click', disminuirPuntaje);
});