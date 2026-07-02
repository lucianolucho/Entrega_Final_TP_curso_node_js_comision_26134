import db from "../config/firebase.js";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc
} from "firebase/firestore";

const productosCollection = collection(db, "productos");

// funciones para traer, crear, actualizar y eliminar productos en la colección "productos" de Firestore.

export const fetchProducts = async () => {
  // FOTO DEL MOMENTO ACTUAL DELA BASE DE DAT OS, OBTENIDA CON getDocs. Luego, se recorre el snapshot de documentos y se construye un arreglo de productos con sus respectivos IDs y datos. Finalmente, se retorna el arreglo de productos.
  const snapshot = await getDocs(productosCollection);

  const productos = [];

  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    productos.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return productos;
};

export const getProductById = async (id) => {
  // Esta función obtiene un producto específico de la colección "productos" en Firestore utilizando su ID.
  //  Se crea una referencia al documento correspondiente y se obtiene el snapshot del mismo. 
  // Si el documento no existe, se retorna null; de lo contrario, se retorna un objeto que contiene 
  // el ID del producto y sus datos.

  console.log(id);
  console.log(typeof id);
  const productRef = doc(productosCollection, String(id));
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const createProduct = async (product) => {
  const productoRef = await addDoc(productosCollection, product);

  return {
    id: productoRef.id,
    ...product,
  };
};


export const deleteProduct = async (id) => {
  const productRef = doc(productosCollection, id);

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  const deletedProduct = {
    id: snapshot.id,
    ...snapshot.data(),
  };

  await deleteDoc(productRef);
  return deletedProduct;
};


export const updateProduct = async (id, updatedProduct) => {

  console.log("LUCHO");
  console.log("id:", id);
  console.log("typeof:", typeof id);
  const productRef = doc(productosCollection, id);

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  await updateDoc(productRef, updatedProduct);

  return {
    id: snapshot.id,
    ...updatedProduct,
  };
};   