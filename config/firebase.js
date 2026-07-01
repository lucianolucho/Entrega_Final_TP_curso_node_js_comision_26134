 // Import the functions you need from the SDKs you need

 // importo la función dotenv para cargar las variables
 // de entorno desde un archivo .env. Luego, se importan las 
 // funciones initializeApp y getFirestore de los SDKs de Firebase para inicializar la aplicación y obtener una instancia de Firestore, respectivamente. Se define la configuración de Firebase utilizando las variables de entorno y se inicializa la aplicación con esa configuración. Finalmente, se obtiene una instancia de Firestore y se exporta para su uso en otras partes del proyecto.  
import dotenv from "dotenv";
dotenv.config();

 
 import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore";

// export const db = getFirestore();

        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey:   process.env.API_KEY,
        authDomain:  process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        const db = getFirestore(app);

        export default db;  