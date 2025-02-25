// Función para mostrar el modal con detalles
function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    let content = '';

    switch(category) {
        case 'baconlove':
            content = `
                <img src="imagenes/burgerShot_baconlov.png" alt="Hamburguesa Bacon Love Burger Shot">
                <h2>Hamburguesa Bacon Love</h2>
                <p>Una jugosa hamburguesa con bacon crujiente, queso derretido, lechuga fresca, tomate y nuestra salsa especial. ¡Irresistible!</p>
                <ul>
                    <li>Bacon Love Burger - $12.50</li>
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
