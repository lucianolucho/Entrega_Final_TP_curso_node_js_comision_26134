import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

  if (!authHeader) {
        return res.status(401).json({ message: "Token no proporcionado 1" });
    }

    console.log("authHeader:", authHeader.split(' ')[1]);

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado  2" });
    }

  try { 
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();     

  }catch(error){
    return res.status(403).json({ message: "Token inválido --------> error" });

  }
     
    // JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
    //     if (err) {
    //         return res.status(403).json({ message: "Token inválido" });
    //     }
    //     req.user = user;
    //     next();
    // });
};