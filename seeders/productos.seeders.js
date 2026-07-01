import db from "../config/firebase.js";


// importa la función collection y addDoc de firebase/firestore
//  para interactuar con la base de datos Firestore. Luego, 
// se define una colección llamada "productos" y se crea un arreglo de objetos llamado "catalogo" 
// que contiene los productos a insertar en la base de datos.
//  La función createProducts recorre el arreglo catalogo y utiliza addDoc para 
// agregar cada producto a la colección "productos". Finalmente, se llama a createProducts para
//  ejecutar el proceso de inserción.  
   
import {collection, addDoc } from "firebase/firestore";

const productosCollection = collection(db, "productos");


// const products = [  
//     { id: 1, name: "Mouse", price: 12000 },
//     { id: 2, name: "Teclado", price: 25000 },
//     { id: 3, name: "Monitor", price: 150000 },
// ];

const catalogo =[
  {
   // id: 1,
    nombre: "Pastillas de Freno Delanteras",
    descripcion: "Juego de pastillas de freno para automóvil",
    marca: "Ferodo",
    precio: 45000,
    stock: 12,
    categoria: "Frenos"
  },
  {
   // id: 2,
    nombre: "Filtro de Aceite",
    descripcion: "Filtro de aceite para motor naftero",
    marca: "Mann",
    precio: 12000,
    stock: 25,
    categoria: "Filtros"
  },
  {
   // id: 3,
    nombre: "Amortiguador Delantero",
    descripcion: "Amortiguador hidráulico delantero",
    marca: "Monroe",
    precio: 85000,
    stock: 8,
    categoria: "Suspensión"
  },
  {
    //id: 4,
    nombre: "Batería 12V 75Ah",
    descripcion: "Batería libre de mantenimiento",
    marca: "Willard",
    precio: 180000,
    stock: 5,
    categoria: "Electricidad"
  }
];

const createProducts = async () => {
    try {
        catalogo.forEach(async (product) => {
            await addDoc(productosCollection, product);
        });
        console.log("Productos creados exitosamente");
    } catch (error) {
        console.error("Error al crear productos: ", error);
    }
};

createProducts();


// node  seeders/productos.seeders.js
