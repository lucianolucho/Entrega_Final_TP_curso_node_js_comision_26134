import { Router } from "express";

const router = Router();

import {loginUsuario
} from "../controler/auth.controler.js";


// Rutas para manejar usuarios

router.post("/login", loginUsuario);

    

// Exportar el router para que pueda ser utilizado en el archivo principal del servidor 
export default router;