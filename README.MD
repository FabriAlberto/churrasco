# Proyecto Vite VanillaJS

Este es un proyecto utilizando **Vite** como herramienta de desarrollo para una aplicación web con **VanillaJS**.

## Requisitos

Asegúrate de tener instalado lo siguiente antes de empezar:

- [Node.js](https://nodejs.org/) (v12 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/FabriAlberto/churrasco.git
2. Navega al directorio del proyecto:
   
   ```bash
   cd tu-proyecto
3. Instala las dependencias:
   
   ```bash
   Copiar código
## Levantar el Proyecto en Desarrollo

Una vez que hayas instalado las dependencias, puedes levantar el servidor de desarrollo utilizando Vite.

1. Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:
   
   ```bash
   npm run dev
2. Accede a la aplicación en tu navegador en la siguiente URL:
   
   ```bash
   http://localhost:3000
El servidor de desarrollo se ejecutará con hot-reloading, por lo que los cambios que hagas en el código se reflejarán de inmediato en el navegador.

## Construir para Producción

Cuando hayas terminado de desarrollar y quieras preparar tu proyecto para producción, puedes crear una versión optimizada de la aplicación.
1. Ejecuta el siguiente comando para construir los archivos optimizados:
   
   ```bash
   npm run build
Este comando generará los archivos optimizados en la carpeta `dist/`, listos para ser desplegados.

2. Para probar la versión de producción localmente, ejecuta el siguiente comando:
   
   ```bash
   npm run preview
Esto abrirá una vista previa de la aplicación de producción en http://localhost:5000.

## Desplegar en un Servidor
Para desplegar el proyecto en un servidor web estático (como Apache, Nginx, Netlify, Vercel, o cualquier otro servidor que sirva archivos estáticos), solo necesitas subir el contenido de la carpeta `dist/`.
### Desplegar en un Servidor HTTP
1. Asegúrate de que el servidor web esté configurado para servir los archivos de la carpeta dist/ como archivos estáticos.
2. Si usas Nginx, por ejemplo, puedes configurarlo de la siguiente manera:

   ```ngnix
   server {
    listen 80;
    server_name tu-dominio.com;
    root /path/to/tu/proyecto/dist;
    index index.html;
    try_files $uri $uri/ /index.html;
   }
3. Si usas Netlify o Vercel, simplemente sube la carpeta `dist/` y estos servicios se encargarán de la configuración automáticamente.

## Comandos de Desarrollo
- `npm run dev`:Levanta el servidor de desarrollo con hot-reloading.
- `npm run build`:Crea una versión optimizada de la aplicación para producción.
- `npm run preview`: Inicia un servidor para previsualizar la aplicación en producción.