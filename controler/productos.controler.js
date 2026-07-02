
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
    
    const products = await fetchProductsModel();
    res.status(200).json(products);
};

export const getProductsById = (async (req, res) => {

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

};