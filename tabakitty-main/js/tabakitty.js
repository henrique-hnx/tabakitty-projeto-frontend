const products = [
    {
        id: 'Cigarro',
        name: 'Cigarro Premium',
        description: 'Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 10.00,
    },
    {
        id: 'Bong',
        name: 'Bong',
        description: 'Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 35.00,
    },
    {
        id: 'Isqueiro',
        name: 'Isqueiro',
        description: 'Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 5.00,
    },
    {
        id: 'Cinzeiro',
        name: 'Cinzeiro',
        description: 'Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 10.00,
    },
];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cart = document.getElementById('cart');
        const totalElement = document.getElementById('total');

        const item = document.createElement('li');
        item.textContent = `${product.name} - R$${product.price.toFixed(2)}`;
        cart.appendChild(item);

        let total = parseFloat(totalElement.textContent);
        total += product.price;
        totalElement.textContent = total.toFixed(2);
    }
}
