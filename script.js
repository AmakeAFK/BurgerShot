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
        case 'comboEspecial':
            content = `
                <h2>Cheeseburgers</h2>
                <p>Elige tu favorito:</p>
                <div class="sub-thumbnails">
                    <div class="sub-thumbnail">
                        <img src="imagenes/burgerShot_cheese.png" alt="Cheeseburger Normal">
                        <h3>Cheeseburger Normal</h3>
                        <p>Hamburguesa con queso - $50</p>
                    </div>
                    <div class="sub-thumbnail">
                        <img src="imagenes/burgerShot_cheese2.png" alt="Doble Cheeseburger">
                        <h3>Doble Cheeseburger</h3>
                        <p>Doble Cheeseburger - $50</p>
                    </div>
                    <div class="sub-thumbnail">
                        <img src="imagenes/burgerShot_cheese3.png" alt="Triple Cheeseburger">
                        <h3>Triple Cheeseburger</h3>
                        <p>Triple Cheeseburger - $50</p>
                    </div>
                </div>
            `;
            break;
    }

    modalDetails.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
