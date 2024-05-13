fetch("products.json")
    .then(response => response.json())
    .then(data => {
        // Filtrar los productos de la categoría "Pizzas"
        const pizzas = data.filter(producto => producto.categoria === "Pizzas");
        // Filtrar los productos de la categoría "Empanadas"
        const empanadas = data.filter(producto => producto.categoria === "Empanadas");

        // Mostrar los productos de pizzas
        const pizzasDiv = document.getElementById('pizzas');
        pizzas.forEach(pizza => {
            const card = createCard(pizza);
            pizzasDiv.appendChild(card);
        });

        // Mostrar los productos de empanadas
        const empanadasDiv = document.getElementById('empanadas');
        empanadas.forEach(empanada => {
            const card = createCard(empanada);
            empanadasDiv.appendChild(card);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));

// Función para crear una tarjeta de producto
function createCard(producto) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-body">
            <h3 class="card-title"> Nombre ${producto.nombre}</h3>
            <p class="card-text"> Descripcion : ${producto.descripcion}</p>
            <p class="card-text">Precio: ${producto.precio}</p>
            <p class="card-text">Reviews: ${producto.reviews}</p>
        </div>
    `;
    return card;
}
