const productos = [
    {
        id: 1,
        nombre: "camiseta",
        precio: 100,
        oferta: false,
    },
    {
        id: 2,
        nombre: "pantalon",
        precio: 50,
        oferta: true,
    },
    {
        id: 3,
        nombre: "buzo",
        precio: 70,
        oferta: false,
    },
    {
        id: 4,
        nombre: "campera",
        precio: 200,
        oferta: true,
    },
    {
        id: 5,
        nombre: "zapatilla",
        precio: 300,
        oferta: false,
    },
];

let carrito = [];


alert(`Bienvenido a nuestra tienda online. Compra minima tres prendas`)

    let prenda = prompt(`tienda online elija los articulos deseados:
        camiseta $20
        pantalon $30
        campera $50
        short $15
        para salir, ingrese salir`)


        while (prenda !== "salir") {
            let productoElegido = productos.find(producto => producto.nombre.toLowerCase() === prenda.toLowerCase());
            
            if (productoElegido) {
                carrito.push(productoElegido);
                alert(`${productoElegido.nombre} agregado al carrito. Precio: $${productoElegido.precio}`);
            } else {
                alert("Producto no encontrado. Por favor, elija un artículo válido.");
            }
            
            prenda = prompt(`Tienda online, elija los artículos deseados:
                camiseta $100
                pantalon $50
                buzo $70
                campera $200
                zapatilla $300
                para salir, ingrese "salir"`);
        }

        function descuento(total, cantidadPrendas) {
            if (cantidadPrendas >= 3) {
                total *= 0.8;  
                alert("Se ha aplicado un descuento del 20% por comprar 3 o más prendas.");
            }
            return total;
        }
        
        if (carrito.length >= 3) {
            let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
            total = descuento(total, carrito.length);
            let listaProductos = carrito.map(producto => `${producto.nombre} ($${producto.precio})`).join(', ');
            alert(`Te llevas ${carrito.length} artículos: ${listaProductos}. Total a pagar: $${total}`);
        } else {
            alert("La compra minima es de 3 prendas.");
        }
        
        console.log("Carrito de compras:", carrito);














