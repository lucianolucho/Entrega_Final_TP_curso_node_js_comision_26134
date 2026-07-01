// const products = [
//     { id: 1, name: "Mouse", price: 12000 },
//     { id: 2, name: "Teclado", price: 25000 },
//     { id: 3, name: "Monitor", price: 150000 },
// ];

// const catalogo =[
//   {
//     "id": 1,
//     "nombre": "Pastillas de Freno Delanteras",
//     "descripcion": "Juego de pastillas de freno para automóvil",
//     "marca": "Ferodo",
//     "precio": 45000,
//     "stock": 12,
//     "categoria": "Frenos"
//   },
//   {
//     "id": 2,
//     "nombre": "Filtro de Aceite",
//     "descripcion": "Filtro de aceite para motor naftero",
//     "marca": "Mann",
//     "precio": 12000,
//     "stock": 25,
//     "categoria": "Filtros"
//   },
//   {
//     "id": 3,
//     "nombre": "Amortiguador Delantero",
//     "descripcion": "Amortiguador hidráulico delantero",
//     "marca": "Monroe",
//     "precio": 85000,
//     "stock": 8,
//     "categoria": "Suspensión"
//   },
//   {
//     "id": 4,
//     "nombre": "Batería 12V 75Ah",
//     "descripcion": "Batería libre de mantenimiento",
//     "marca": "Willard",
//     "precio": 180000,
//     "stock": 5,
//     "categoria": "Electricidad"
//   }
// ];

import {
    fetchProducts as fetchProductsModel,
    createProduct as createProductModel,
    //getProducts as getProductsModel,
    getProductById as getProductByIdModel,
    updateProduct as updateProductModel,
    deleteProduct as deleteProductModel,
} from "../models/product.js";

// Acá recibís req y armás la respuesta:
export const getProducts = async (req, res) => {
    // res.status(200).json(products);
    const products = await fetchProductsModel();
    res.status(200).json(products);
};

export const getProductsById = (async (req, res) => {

    /* console.log("llegamos aL metodo getProductsById");
     console.log(req.params.id);
    res.status(200).json({message: "Producto encontrado", id: req.params.id}); 
    */

    // const id = Number(req.params.id);
    const { id } = req.params;

    //const product = products.find((product) => product.id === id);
    const producto = await getProductByIdModel(id);


    if (!producto) {
        return res.status(404).json({
            message: "Producto no encontrado",
        });
    }

    res.status(200).json(producto);
});



/*
export const crearProducto = ((req, res) => {
    const { name, price } = req.body;
    console.log(req.body);

    if (!name || !price) {
        return res.status(400).json({
            message: "Faltan datos obligatorios",
        });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price,
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});*/


/*
categoria , descripcion,marca, nombre,precio,stock
*/

export const crearProducto = async (req, res) => {
    const { categoria, descripcion, marca, nombre, precio, stock } = req.body;

    if (!categoria || !descripcion || !marca || !nombre || !precio || !stock) {
        return res.status(422).json({
            message: "Faltan datos obligatorios",
        });
    }

    // envia un json como argumento
    const newProduct = await createProductModel({
        categoria, descripcion, marca, nombre, precio, stock
    });

    res.status(201).json(newProduct);
};

export const eliminarProducto = (async (req, res) => {
    const id = (req.params.id);




    // const productIndex = products.findIndex((product) => product.id === id);

    // if (productIndex === -1) {
    //     return res.status(404).json({
    //         message: "Producto no encontrado",
    //     });
    // }

    // const deletedProduct = products.splice(productIndex, 1);

    const productoDelete = await deleteProductModel(id);

    if (!productoDelete) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({
        message: "Producto eliminado",
        product: productoDelete,
    });
});


export const updateProducto = async (req, res) => {
    const { categoria, descripcion, marca, nombre, precio, stock } = req.body;

    console.log(req.params)
     const { id } = req.params;

    //console.log("aca en updateProducto ");

    if (!categoria || !descripcion || !marca || !nombre || !precio || !stock) {
        return res.status(422).json({
            message: "Faltan datos obligatorios",
        });
    }

    // envia un json como argumento
    const updateProduct = await updateProductModel(id,{
        categoria, descripcion, marca, nombre, precio, stock
    });

    if (!updateProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(updateProduct);

    // res.status(201).json(updateProduct);
};