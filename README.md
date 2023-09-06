# Pruebas Cypress en SauceDemo

Este proyecto contiene pruebas automatizadas realizadas con Cypress en la página https://www.saucedemo.com. Las pruebas incluyen escenarios de inicio de sesión, manipulación de carrito de compras y finalización de la compra.

## Configuración del Proyecto

1. **Instalación de Dependencias**: Antes de comenzar, asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu computadora. Luego, instala las dependencias del proyecto ejecutando el siguiente comando:

   ```bash
   npm install

## Para Ejecutar Las Pruebas Utiliza

Esto ejecutará todas las pruebas y mostrará los resultados en la terminal:

```bash
npx cypress run
```

## Ejemplos de Pruebas

A continuación, se presentan ejemplos de los casos de prueba incluidos en este proyecto:

Inicio de Sesión: Verifica que se pueda iniciar sesión con el usuario estándar.

Agregar al Carrito: Agrega dos productos al carrito y verifica que estén presentes en el carrito.

Visualizar el Carrito: Accede al carrito de compras y verifica que los productos en el carrito se muestren correctamente.

Completar el Formulario de Compra: Completa el formulario de compra con información válida.

Finalizar la Compra: Confirma la compra y verifica la página de confirmación "THANK YOU FOR YOUR ORDER".
