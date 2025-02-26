// Función para mostrar el modal con detalles
function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    let content = '';

    switch(category) {
        case 'refresco':
            content = `
                <img src="imagenes/refresco.png" alt="Refresco">
                <h2>Refresco</h2>
                <p>Refrescante y burbujeante.</p>
                <ul>
                    <li>Refresco (500ml) - $20</li>
                </ul>
            `;
            break;
        case 'jugo':
            content = `
                <img src="imagenes/jugo.png" alt="Jugo">
                <h2>Jugo Natural</h2>
                <p>Hecho con frutas frescas.</p>
                <ul>
                    <li>Jugo (300ml) - $25</li>
                </ul>
            `;
            break;
        case 'cerveza':
            content = `
                <img src="imagenes/cerveza.png" alt="Cerveza">
                <h2>Cerveza</h2>
                <p>Fría y perfecta para acompañar.</p>
                <ul>
                    <li>Cerveza (355ml) - $30</li>
                </ul>
            `;
            break;
        // Puedes agregar más bebidas aquí
        case 'agua':
            content = `
                <img src="imagenes/agua.png" alt="Agua">
                <h2>Agua</h2>
                <p>Pura y refrescante.</p>
                <ul>
                    <li>Agua (500ml) - $15</li>
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
