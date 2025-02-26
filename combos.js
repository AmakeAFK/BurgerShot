// Función para mostrar el modal con detalles
function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    let content = '';

    switch(category) {
        case 'combo1':
            content = `
                <img src="imagenes/combo1.png" alt="Combo 1">
                <h2>Combo 1</h2>
                <p>¡Un clásico irresistible!</p>
                <ul>
                    <li>Hamburguesa + Papas - $60</li>
                </ul>
            `;
            break;
        case 'combo2':
            content = `
                <img src="imagenes/combo2.png" alt="Combo 2">
                <h2>Combo 2</h2>
                <p>Sabores frescos para disfrutar.</p>
                <ul>
                    <li>Burrito + Refresco - $55</li>
                </ul>
            `;
            break;
        case 'combo3':
            content = `
                <img src="imagenes/combo3.png" alt="Combo 3">
                <h2>Combo 3</h2>
                <p>Perfecto para los más pequeños.</p>
                <ul>
                    <li>Cajita Feliz + Jugo - $50</li>
                </ul>
            `;
            break;
        case 'tacoEspecial': // Ejemplo de un nuevo producto
            content = `
                <img src="imagenes/taco_especial.png" alt="Taco Especial">
                <h2>Taco Especial</h2>
                <p>Sabor picante y único.</p>
                <ul>
                    <li>Taco Especial - $45</li>
                </ul>
            `;
            break;
        case 'pizzaCombo': // Otro producto nuevo
            content = `
                <img src="imagenes/pizza_combo.png" alt="Pizza Combo">
                <h2>Pizza Combo</h2>
                <p>Para compartir en familia.</p>
                <ul>
                    <li>Pizza + Bebida - $70</li>
                </ul>
            `;
            break;
    }

    modalDetails.innerHTML = content;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
