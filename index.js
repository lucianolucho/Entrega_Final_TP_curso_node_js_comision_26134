import  dotenv from "dotenv";  
dotenv.config();  

import app from "./app.js";

//const PORT = 3000;
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


