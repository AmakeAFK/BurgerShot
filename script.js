function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    let content = '';
    function showDetails(category) {
        console.log("Categoría seleccionada:", category);
        const modal = document.getElementById('modal');
        const modalDetails = document.getElementById('modal-details');
        let content = '';
        // Resto del código...
    }

    switch(category) {
        case 'baconlove':
            content = `
                <img src="imagenes/burgerShot_baconlov.png" alt="Hamburguesa Quecu Infarto">
                <h2>Hamburguesa Quecu Infarto</h2>
                <p>Una hamburguesa que te ofrecera una experiencia completa por el hospital.</p>
                <ul>
                    <li>Quecu Infarto - $65</li>
                </ul>
            `;
            break;
        case 'cajitafeliz':
            content = `
                <img src="imagenes/BurgerShot_MenuKid.png" alt="Caja de la alegria">
                <h2>Caja de la alegria</h2>
                <p>El menú perfecto para las nuevas juventudes</p>
                <ul>
                    <li>Caja de la alegria - $50</li>
                </ul>
            `;
            break;
        case 'pollofrito':
            content = `
                <img src="imagenes/burgerShot_chickenStick.png" alt="Pollo Frito">
                <h2>Pollo Frito</h2>
                <p>El menú perfecto para las nuevas juventudes</p>
                <ul>
                    <li>Pollo Frito - $40</li>
                </ul>
            `;
            break;
        case 'nashot':
            content = `
                <img src="imagenes/burgerShot_natchos.png" alt="Nashots">
                <h2>Nashots</h2>
                <p>El menú perfecto para las nuevas juventudes</p>
                <ul>
                    <li>Nashots - $40</li>
                </ul>
            `;
            break;
        case 'burrito':
            content = `
                <h2>Burritos - Elige tu favorito</h2>
                <div class="combo-sections">
                    <div class="combo-section">
                        <img src="imagenes/burgerShot_buritos.png" alt="Burrito de carne">
                        <h3>Burrito de carne</h3>
                        <p>Burrito de carne muyyyyyyy bueno</p>
                        <p class="price">$50</p>
                    </div>
                    <div class="combo-section">
                        <img src="imagenes/burgerShot_BuritosChicken.png" alt="Burrito de pollo">
                        <h3>Burrito de pollo</h3>
                        <p>Burrito de pollo muyyyyyyy bueno</p>
                        <p class="price">$65</p>
                    </div>
                </div>
            `;
            break;
        case 'comboEspecial':
            content = `
                <h2>Cheeseburgers - Elige tu favorita</h2>
                <div class="combo-sections">
                    <div class="combo-section">
                        <img src="imagenes/burgerShot_cheese.png" alt="Cheeseburger Normal">
                        <h3>Cheeseburger Normal</h3>
                        <p>Cheeseburger Normal</p>
                        <p class="price">$50</p>
                    </div>
                    <div class="combo-section">
                        <img src="imagenes/burgerShot_cheese2.png" alt="Doble Cheeseburger">
                        <h3>Doble Cheeseburger</h3>
                        <p>Doble Cheeseburger</p>
                        <p class="price">$65</p>
                    </div>
                    <div class="combo-section">
                        <img src="imagenes/burgerShot_cheese3.png" alt="Triple Cheeseburger">
                        <h3>Triple Cheeseburger</h3>
                        <p>Triple Cheeseburger</p>
                        <p class="price">$70</p>
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

function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    console.log("Modal:", modal, "Modal Details:", modalDetails);
    let content = '';
    // Resto del código...
}
