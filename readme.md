
consigna 1:
comandos usados:

npm init -y
--------------------------------------------
consigna 2;
// Instala express, cors, body-parser, dotenv, firebase y jsonwebtoken
como dependencias del proyecto.


npm install express
npm install cors
npm install body-parser
npm install dotenv
npm install firebase
npm install jsonwebtoken

npm install express cors body-parser dotenv firebase jsonwebtoken

npm install -D jest supertest
---------------------------------------------------------
consigna 3:






------------------------------------------------------------
-------------------------------------------------------------
npm -i cors

import cors from "cors"


app.use(cors());


/****************************************/
// es un middleware por si no encuentra ninguna ruta   vaya a arar aca
app.use( (req, res)=>{
    res.status(404).json({error :  "ruta no encontrada1"})     
});
/******************************************


/**************************/
/**************************/
conexion a firebase

        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyAAPBqQ42hu-S2FSo29mJMOuFtLsONggug",
        authDomain: "proyecto-ljb108.firebaseapp.com",
        projectId: "proyecto-ljb108",
        storageBucket: "proyecto-ljb108.firebasestorage.app",
        messagingSenderId: "760950298890",
        appId: "1:760950298890:web:af57524f870558b93782f3"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
/**************************/
/**************************/