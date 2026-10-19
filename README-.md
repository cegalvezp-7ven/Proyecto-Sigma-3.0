# GameBites — Proyecto Sigma

Aplicación web de comercio electrónico conceptual que reúne chocolates, productos y cajas coleccionables inspirados en videojuegos y universos gamer. El catálogo incluye artículos individuales y cajas temáticas, con navegación por categorías y una experiencia de compra desde el navegador.

## Integrantes

- Cesar Galvez
- Paloma Moreno
- Paolo Ferreira

## Funcionalidades principales

- Página de inicio con productos destacados y acceso a las colecciones.
- Catálogo de productos con filtros por tipo y categoría.
- Vista de detalle para cada producto.
- Secciones de promociones, información del equipo y contacto.
- Carrito de compras con cantidades y cálculo del total.
- Inicio de sesión y registro de usuarios.
- Panel de administración con resumen de ventas y herramientas para gestionar el catálogo.
- Diseño adaptable a distintos tamaños de pantalla.
- Pruebas unitarias definidas para componentes seleccionados con Jasmine y Karma.

## Estructura del proyecto

```text
Proyecto-Sigma-3.0-main/
├── public/
│   ├── images/                 Imágenes de productos
│   ├── icons.svg
│   └── favicon.svg
├── src/
│   ├── assets/                 Recursos gráficos
│   ├── components/
│   │   ├── atoms/              Badge, Logo y Price
│   │   ├── molecules/          ProductCard, SectionHeading y navegación del footer
│   │   └── organisms/          Navbar, Hero, ProductGrid y Footer
│   ├── data/
│   │   ├── products.js         Catálogo inicial de productos
│   │   └── cart.js             Lógica auxiliar del carrito
│   ├── pages/                  Páginas de la aplicación
│   ├── styles/                 Estilos globales y por componente/página
│   ├── tests/
│   │   └── components.spec.jsx Pruebas unitarias
│   ├── App.jsx                 Rutas y estructura principal
│   └── main.jsx                Punto de entrada de React
├── docs/
│   ├── cobertura-testing.md
│   ├── auditoria-evaluacion-parcial-2.md
│   └── despliegue-vercel.md
├── package.json
├── vite.config.js
├── karma.conf.cjs
└── vercel.json
```

## Tecnologías utilizadas

- **React** para construir la interfaz mediante componentes.
- **Vite** como herramienta de desarrollo y compilación.
- **React Router** para la navegación entre páginas.
- **Bootstrap y React Bootstrap** como apoyo para la interfaz.
- **CSS** para los estilos generales, componentes y adaptación responsive.
- **Jasmine y Karma** para la suite de pruebas unitarias.

## Requisitos

- Node.js **22.12.0 o superior**.
- npm, incluido con Node.js.
- Google Chrome o Chromium para ejecutar las pruebas unitarias en modo headless.

## Puesta en marcha

1. Clonar o descargar el repositorio del proyecto.
2. Abrir una terminal en la carpeta raíz, donde se encuentra `package.json`.
3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección local que indique Vite en la terminal.

## Comandos disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run lint      # Ejecuta ESLint
npm run build     # Genera la versión de producción
npm run preview   # Previsualiza la compilación
npm test          # Ejecuta las pruebas unitarias con Karma
npm run test:watch # Mantiene las pruebas en modo observación
```

## Páginas y navegación

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio |
| `/products` | Catálogo de productos y filtros |
| `/products/:id` | Detalle de un producto |
| `/promociones` | Promociones y cajas temáticas |
| `/nosotros` | Información del proyecto |
| `/contacto` | Página de contacto |
| `/carrito` | Carrito de compras |
| `/login` | Inicio de sesión y registro |
| `/admin` | Panel de administración |

## Datos y almacenamiento

El catálogo inicial se encuentra definido en `src/data/products.js`. El carrito utiliza `localStorage` del navegador para conservar los productos agregados entre visitas. La aplicación también utiliza almacenamiento local para ciertos datos de la experiencia de usuario y del panel.

Este proyecto es una aplicación frontend; el almacenamiento local del navegador no equivale a una base de datos ni a un sistema de autenticación seguro para producción.

## Pruebas unitarias

Se prepararon **15 casos de prueba** para los componentes `Badge`, `Price`, `ProductGrid`, `SectionHeading` y `Navbar`, usando Jasmine y Karma. La ejecución de la suite debe verificarse en un entorno que tenga instaladas las dependencias y Google Chrome o Chromium.

Para ejecutar las pruebas:

```bash
npm install
npm test
```

La suite está documentada en `docs/cobertura-testing.md`. Hasta que se ejecuten correctamente, los resultados de las pruebas y cualquier porcentaje de cobertura deben considerarse pendientes de verificación.

## Despliegue

El proyecto incluye `vercel.json` para configurar la resolución de rutas de la aplicación al desplegarla en Vercel. Consulta `docs/despliegue-vercel.md` para revisar los pasos de configuración. El despliegue debe considerarse completado únicamente después de publicar la aplicación y comprobar la URL resultante.

---

**Proyecto académico:** Proyecto Sigma — GameBites.
