// Función para mostrar el modal con detalles
function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    let content = '';

    switch(category) {
        case 'baconlove':
            content = `
                <img src="imagenes/burgerShot_baconlov.png" alt="Hamburguesa Quecu Infarto">
                <h2>Hamburguesa Quecu Infarto</h2>
                <p>¡Irresistible!</p>
                <ul>
                    <li>Quecu Infarto - $50</li>
                </ul>
            `;
            break;
        case 'cajitafeliz':
            content = `
                <img src="imagenes/BurgerShot_MenuKid.png" alt="Cajita Feliz">
                <h2>Cajita Feliz</h2>
                <p>Por poner.</p>
                <ul>
                    <li>Cajita Feliz - $40</li>
                </ul>
            `;
            break;
        case 'burrito':
            content = `
                <img src="imagenes/burgerShot_buritos.png" alt="Burrito de Pollo">
                <h2>Burrito</h2>
                <p>Por poner.</p>
                <ul>
                    <li>Burrito - $40</li>
                </ul>
            `;
            break;
        case 'burritopollo':
            content = `
                <img src="imagenes/burgerShot_BuritosChicken.png" alt="Burrito de Pollo">
                <h2>Burrito de pollo</h2>
                <p>Por poner.</p>
                <ul>
                    <li>Burrito de pollo - $40</li>
                </ul>
            `;
            break;
        case 'cheeseburger':
            content = `
                <img src="imagenes/burgerShot_cheese.png" alt="Hamburguesa con queso>
                <h2>Cheeseburger Normal</h2>
                <p>Por poner.</p>
                <ul>
                    <li>Cheeseburger Normal - $40</li>
                </ul>
            `;
            break;
        case 'cheeseburger2':
            content = `
                <img src="imagenes/burgerShot_cheese2.png" alt="Hamburguesa doble con queso>
                <h2>Doble Cheeseburger</h2>
                <p>Por poner.</p>
                <ul>
                    <li>Doble Cheeseburger - $40</li>
                </ul>
            `;
            break;
        case 'cheeseburger3':
            content = `
                <img src="imagenes/burgerShot_cheese3.png" alt="Hamburguesa triple con queso>
                <h2>Triple Cheeseburger</h2>
                <p>Por poner.</p>
                <ul>
                    <li>Triple Cheeseburger - $40</li>
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
