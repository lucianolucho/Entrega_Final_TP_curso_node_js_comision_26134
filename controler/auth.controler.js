//import jwt from "jsonwebtoken";


// vcredenciales validas
// {
//   'username' : "admin",
//   'password' : "1234"
// };

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

    // const token = jwt.sign(
    //     {
    //         email: email
    //     },
    //     process.env.JWT_SECRET,
    //     {
    //         expiresIn: "1h"
    //     }
    // );

    res.json({
        message:"login exitoso",
        token
    });
};

// export const loginUsuario = (req, res) => {

//     const { email, password } = req.body;

//     if (email === "admin@test.com" &&
//         password === "1234") {

//         return res.json({
//             token: "abc123xyz"
//         });
//     }

//     return res.status(401).json({
//         message: "Credenciales incorrectas"
//     });
// };