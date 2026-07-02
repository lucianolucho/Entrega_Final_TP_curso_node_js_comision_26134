
import { generarToken } from "../utils/token.generator.js";

const defaultUser = {
     id : 1 , 
     name:"User",
     admin : true,
     email: "adminuser@example.com",  
     password: "123456"
};

export const loginUsuario = (req, res) => {

    console.log("req.body:", req.body);


    const { email, password } = req.body;

    if (email !== defaultUser.email || password !== defaultUser.password) {
        return res.status(401).json({
            message: "Credenciales incorrectas"
        });
    }
    
    const token = generarToken(defaultUser);
    // // validar usuario contra BD o Firebase


    res.json({
        message:"login exitoso",
        token
    });
};

