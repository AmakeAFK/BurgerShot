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
                <h2>Combo Especial - Elige tu favorito</h2>
                <div class="combo-sections">
                    <div class="combo-section">
                        <img src="imagenes/combo1.png" alt="Combo 1">
                        <h3>Combo 1</h3>
                        <p>Hamburguesa + Papas</p>
                        <p class="price">$60</p>
                    </div>
                    <div class="combo-section">
                        <img src="imagenes/combo2.png" alt="Combo 2">
                        <h3>Combo 2</h3>
                        <p>Burrito + Refresco</p>
                        <p class="price">$55</p>
                    </div>
                    <div class="combo-section">
                        <img src="imagenes/combo3.png" alt="Combo 3">
                        <h3>Combo 3</h3>
                        <p>Cajita Feliz + Jugo</p>
                        <p class="price">$50</p>
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
