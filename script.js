// Función para abrir pestañas
function openTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');

    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}

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
        case 'veggieshot':
            content = `
                <img src="imagenes/vegetariano_burger.jpg" alt="Veggie Shot Burger Shot">
                <h2>Veggie Shot</h2>
                <p>Una deliciosa hamburguesa vegetariana con aguacate, rúcula y alioli de ajo. ¡Saludable y sabrosa!</p>
                <ul>
                    <li>Veggie Shot - $9.00</li>
                </ul>
            `;
            break;
        case 'refresco':
            content = `
                <img src="imagenes/refresco.jpg" alt="Refresco Burger Shot">
                <h2>Refresco</h2>
                <p>Un refresco frío y refrescante para acompañar tu comida (Cola, Limón, Naranja).</p>
                <ul>
                    <li>Refresco - $2.50</li>
                </ul>
            `;
            break;
        case 'milkshake':
            content = `
                <img src="imagenes/milkshake.jpg" alt="Milkshake Burger Shot">
                <h2>Milkshake</h2>
                <p>Un cremoso milkshake en sabores Vainilla, Chocolate o Fresa.</p>
                <ul>
                    <li>Milkshake - $4.50</li>
                </ul>
            `;
            break;
        case 'papasfritas':
            content = `
                <img src="imagenes/papas_fritas.jpg" alt="Papas Fritas Burger Shot">
                <h2>Papas Fritas</h2>
                <p>Crujientes papas fritas clásicas, perfectas para compartir.</p>
                <ul>
                    <li>Papas Fritas - $3.50</li>
                </ul>
            `;
            break;
        case 'aroscebolla':
            content = `
                <img src="imagenes/aros_cebolla.jpg" alt="Aros de Cebolla Burger Shot">
                <h2>Aros de Cebolla</h2>
                <p>Aros de cebolla crujientes y dorados, ideales como acompañamiento.</p>
                <ul>
                    <li>Aros de Cebolla - $4.20</li>
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
