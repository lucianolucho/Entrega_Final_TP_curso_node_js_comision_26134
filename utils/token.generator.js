import dotenv from "dotenv";
dotenv.config();    

import JWT from "jsonwebtoken";


export const generarToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    };

    const token = JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: "5h" });

    return token;
};  