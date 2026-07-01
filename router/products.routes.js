import { Router } from "express";

const router = Router();

import {getProducts,
    getProductsById,
    crearProducto,
    eliminarProducto,
    updateProducto
} from "../controler/productos.controler.js";


// Rutas para manejar productos
router.get("/", getProducts);
// Ruta para obtener un producto por su ID
router.get("/:id", getProductsById); 
router.post("/create", crearProducto);
// Ruta para eliminar un producto por su ID
router.delete("/:id", eliminarProducto);
router.put("/:id", updateProducto);
     
    // router.get("/", getProducts);
    // router.get("/:id", getProductById);
    // router.post("/", createProduct);
    // router.delete("/:id", deleteProduct);
    

// Exportar el router para que pueda ser utilizado en el archivo principal del servidor 
export default router;