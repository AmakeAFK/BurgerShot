// Función para mostrar el modal con detalles
function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    let content = '';

    switch(category) {
        case 'milfshake':
            content = `
                <img src="imagenes/0.milkskake.png" alt="Milfshake">
                <h2>Milk Shake</h2>
                <p>Refrescante.</p>
                <ul>
                    <li>Milk Shake (500ml) - $45</li>
                </ul>
            `;
            break;
        case 'burgercafé':
            content = `
                <img src="imagenes/Coffe_burgershot.png" alt="Café Burger">
                <h2>Café Burger</h2>
                <p>Café bien buen.</p>
                <ul>
                    <li>Café (300ml) - $40</li>
                </ul>
            `;
            break;
        case 'cerveza':
            content = `
                <img src="imagenes/beer.png" alt="Cerveza">
                <h2>Cerveza</h2>
                <p>Fría y perfecta para acompañar.</p>
                <ul>
                    <li>Cerveza (355ml) - $50</li>
                </ul>
            `;
            break;
        // Puedes agregar más bebidas aquí
        case 'agua':
            content = `
                <img src="imagenes/water_bottle.png" alt="Agua">
                <h2>Agua</h2>
                <p>Pura y refrescante.</p>
                <ul>
                    <li>Agua (500ml) - $40</li>
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
