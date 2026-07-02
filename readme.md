
# API REST - Catálogo de Productos

## Descripción

Este proyecto consiste en el desarrollo de una **API REST** utilizando **Node.js** y **Express**, cuyo objetivo es gestionar un catálogo de productos almacenados en **Firebase Firestore**.

La aplicación permite realizar operaciones de alta, baja, modificación y consulta de productos, implementando una arquitectura en capas que facilita el mantenimiento y la escalabilidad del código.

Además, incorpora autenticación mediante **JSON Web Token (JWT)** para proteger los recursos que requieren autorización.

---

# Objetivos

* Desarrollar una API REST utilizando Node.js.
* Implementar una arquitectura en capas.
* Gestionar productos almacenados en Firebase Firestore.
* Proteger los endpoints mediante autenticación JWT.
* Aplicar buenas prácticas de organización del código.

---

# Tecnologías utilizadas

* Node.js
* Express
* Firebase Firestore
* JSON Web Token (JWT)
* Dotenv
* Cors
* Body Parser

---

# Estructura del proyecto

```text
├── config/
│   └── firebase.js
│
├── controllers/
│   └── productos.controller.js
│
├── middleware/
│   └── auth.middleware.js
│
├── models/
│   └── product.js
│
├── routes/
│   ├── auth.routes.js
│   └── products.routes.js
│
├── seeders/
│   └── productos.seeder.js
│
├── .env
├── index.js
└── package.json
```

---

# Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd ENTREGA_FINAL
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm start
```

o, si se utiliza Nodemon:

```bash
npm run dev
```

---

# Variables de entorno

Crear un archivo **.env** en la raíz del proyecto con las credenciales correspondientes de Firebase y la clave utilizada para generar los tokens JWT.

Ejemplo:

```env
PORT=3000

JWT_SECRET=mi_clave_secreta

FIREBASE_API_KEY=xxxxxxxxxxxxxxxx
FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxx
FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxx
FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxxxxxx
FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxxxxxx
FIREBASE_APP_ID=xxxxxxxxxxxxxxxx
```

---

# Funcionalidades

La API permite:

* Obtener el listado completo de productos.
* Consultar un producto por su identificador.
* Crear nuevos productos.
* Modificar productos existentes.
* Eliminar productos.
* Autenticar usuarios.
* Generar tokens JWT.
* Proteger rutas mediante middleware de autenticación.

---

# Endpoints disponibles

## Autenticación

| Método | Endpoint    | Descripción               |
| ------ | ----------- | ------------------------- |
| POST   | /auth/login | Autenticación del usuario |

---

## Productos

| Método | Endpoint      | Descripción                 |
| ------ | ------------- | --------------------------- |
| GET    | /products     | Obtener todos los productos |
| GET    | /products/:id | Obtener un producto por ID  |
| POST   | /products     | Crear un producto           |
| PUT    | /products/:id | Actualizar un producto      |
| DELETE | /products/:id | Eliminar un producto        |

---

# Autenticación

Las operaciones protegidas requieren enviar un **Bearer Token** en el encabezado de la petición.

Ejemplo:

```http
Authorization: Bearer <TOKEN>
```

---

# Base de datos

Los datos son almacenados utilizando **Firebase Firestore**, una base de datos NoSQL alojada en la nube.

Cada producto contiene información como:

* Nombre
* Descripción
* Precio
* Marca
* Categoría
* Stock

---

# Seeder

El proyecto incluye un seeder que permite inicializar la colección de productos con datos de prueba.

Ejemplo:

```bash
node seeders/productos.seeder.js
```

---

# Pruebas

Para verificar el funcionamiento de la API se utilizó Thunder Client, realizando pruebas sobre todos los endpoints implementados.

---

# Mejoras futuras

* Validación de datos de entrada.
* Registro de usuarios.
* Paginación de resultados.
* Búsquedas por nombre o categoría.
* Filtros por precio.
* Ordenamiento de productos.
* Documentación mediante Swagger.

---

# Autor

Trabajo práctico desarrollado como parte del curso de Node.js.

Autor: Luciano Bellido
