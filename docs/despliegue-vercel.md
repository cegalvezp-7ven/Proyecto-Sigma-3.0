# Despliegue de Proyecto Sigma en Vercel

## Configuración detectada
- Framework: React con Vite.
- Comando de build: `npm run build`.
- Directorio de salida de Vite: `dist`.
- Archivo `vercel.json`: rewrite SPA hacia `/index.html` para permitir recargas en rutas internas de React Router.
- No se verificó ningún enlace de Vercel ni acceso al repositorio remoto en esta sesión.

## Pasos
1. Confirma que el repositorio de GitHub contenga los cambios y que incluya `package.json`, `package-lock.json`, `index.html`, `src/`, `public/` y `vercel.json`.
2. En Vercel, selecciona **Add New → Project** y autoriza GitHub si se solicita.
3. Importa el repositorio correcto. Framework preset: **Vite**; Build Command: `npm run build`; Output Directory: `dist`; Install Command: `npm install`.
4. Configura únicamente las variables de entorno que el proyecto realmente utilice. No publiques claves ni subas `.env`.
5. Despliega y abre el enlace generado. Verifica inicio, catálogo, detalle, filtros, carrito, login, contacto y rutas directas.
6. Si el build falla, copia el mensaje completo del log y corrige la causa antes de presentar el enlace.

No se incluye un enlace ficticio: el URL público solo existe después de que Vercel complete un despliegue real.
