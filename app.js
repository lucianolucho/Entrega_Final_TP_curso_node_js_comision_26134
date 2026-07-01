import  dotenv from "dotenv";  
dotenv.config();  

import express from "express";
import cors from "cors";
//  En este ejemplo, no estamos utilizando routers separados para productos y usuarios, sino que todas las rutas están definidas directamente en el archivo principal del servidor. Esto es solo para fines de demostración y no es una práctica recomendada para proyectos más grandes, donde se recomienda organizar las rutas en archivos separados utilizando Express Router.

//
import productsRouter from "./router/products.routes.js";

import authRouter from "./router/auth.routes.js";



import {authenticateToken } from "./middelwares/auth.middelware.js"; 

const app = express();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());



// Configuración básica: Permitir todos los orígenes
app.use(cors());

// // Configuración avanzada: Permitir dominios específicos
// const corsOptions = {
// // Dominios permitidos
// origin: ['https://example.com', 'https://anotherdomain.com'],
// // Métodos HTTP permitidos
// methods: ['GET', 'POST', 'PUT', 'DELETE'],
// // Encabezados permitidos
// allowedHeaders: ['Content-Type', 'Authorization'],
// credentials: true // Permitir cookies o credenciales
// };
// app.use(cors(corsOptions));


// Ruta para la página de inicio, que muestra un mensaje de bienvenida
// app.get("/", (req, res) => {
//   res.send(`
//     <h1>API de Productos</h1>
//     <p>Servidor funcionando correctamente</p>
//   `);
// });


app.use('/api/products', authenticateToken , productsRouter);

//app.use('/api/auth', authRouter);
app.use('/auth', authRouter);

// es un middleware por si no encuentra ninguna ruta   vaya a arar aca
app.use( (req, res)=>{
    res.status(404).json({error :  "ruta no encontrada1"})     
});


export default app;

