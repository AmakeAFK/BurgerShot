// Función para mostrar el modal con detalles
function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    let content = '';

    switch(category) {
        case 'novedades':
            content = `
                <img src="imagenes/novedades_burger.jpg" alt="Novedades Burger Shot">
                <h2>Novedades</h2>
                <p>Descubre nuestras nuevas creaciones jugosas y deliciosas.</p>
                <ul>
                    <li>Mega Shot Especial - $13.50</li>
                    <li>Burger Crujiente - $10.00</li>
                </ul>
            `;
            break;
        case 'parrilla':
            content = `
                <img src="imagenes/parrilla_burger.jpg" alt="Menú Parrilla Burger Shot">
                <h2>Menú Parrilla</h2>
                <p>Hamburguesas a la parrilla con sabor único.</p>
                <ul>
                    <li>Burger Shot Original - $8.50</li>
                    <li>Double Shot - $11.00</li>
                </ul>
            `;
            break;
        case 'pollo':
            content = `
                <img src="imagenes/pollo_burger.jpg" alt="Menú Pollo Burger Shot">
                <h2>Menú Pollo</h2>
                <p>Opciones crujientes y sabrosas de pollo.</p>
                <ul>
                    <li>Chicken Shot - $7.80</li>
                    <li>Pollo Picante - $9.00</li>
                </ul>
            `;
            break;
        case 'acompannamientos':
            content = `
                <img src="imagenes/acompannamientos.jpg" alt="Acompañamientos Burger Shot">
                <h2>Acompañamientos</h2>
                <p>Perfectos para complementar tu comida.</p>
                <ul>
                    <li>Papas Fritas - $3.50</li>
                    <li>Aros de Cebolla - $4.20</li>
                </ul>
            `;
            break;
        case 'bebidas':
            content = `
                <img src="imagenes/bebidas.jpg" alt="Bebidas Burger Shot">
                <h2>Bebidas</h2>
                <p>Refresca tu experiencia con nuestras bebidas.</p>
                <ul>
                    <li>Refresco - $2.50</li>
                    <li>Milkshake - $4.50</li>
                </ul>
            `;
            break;
        case 'postres':
            content = `
                <img src="imagenes/postres.jpg" alt="Postres Burger Shot">
                <h2>Postres</h2>
                <p>Dulces para finalizar tu comida.</p>
                <ul>
                    <li>Brownie Shot - $3.80</li>
                    <li>Mini Donuts - $4.00</li>
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
