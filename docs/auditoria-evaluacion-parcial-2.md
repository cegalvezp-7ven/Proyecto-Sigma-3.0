# Auditoría preliminar — Evaluación Parcial N.º 2

La revisión se basa en el código entregado en `Proyecto-Sigma-3.0-main` y en el PDF `DSY1104 Evaluación Parcial 2`. Los estados indican evidencia estática del código; los requisitos que necesitan ejecución no se consideran verificados solo por existir un archivo.

| Criterio de la pauta | Estado inicial / actual | Evidencia en el proyecto | Corrección o acción | Verificación final |
|---|---|---|---|---|
| Framework JavaScript moderno | Cumplido estáticamente | `package.json` declara React 19 y Vite; `src/main.jsx` monta React | No se reemplazó la estructura | Pendiente ejecutar instalación y build |
| Componentes React y separación | Cumplido estáticamente | `src/components/atoms`, `molecules`, `organisms`; páginas en `src/pages` | Se conserva la arquitectura existente | Revisar ejecución en navegador |
| Gestión de propiedades y estado | Parcialmente verificado | `Navbar.jsx`, `Products.jsx`, `Carrito.jsx` usan estado y/o props | No se cambió la lógica de negocio | Pruebas de flujo manual pendientes |
| Responsividad con Bootstrap | Parcial | Bootstrap está en dependencias; hay media queries en CSS; se agregó `src/styles/responsive-overrides.css` | Se ajustaron navegación móvil, grillas, formularios, carrito y tamaños pequeños | No se dispone de navegador visual para validar breakpoints reales |
| Pruebas con Jasmine y Karma | Implementación agregada, ejecución pendiente | `karma.conf.cjs`, `src/tests/components.spec.jsx`, scripts `test` y `test:watch` | Se agregaron 15 pruebas: tres para cada uno de cinco componentes | Pendiente `npm install` y `npm test` con Chrome/Chromium |
| Pruebas de lógica/comportamiento | Parcial | Tests para `Badge`, `Price`, `ProductGrid`, `SectionHeading` | Cobertura inicial de renderizado, formato, props y enlaces | No hay resultados ejecutados ni porcentaje de cobertura confirmado |
| Mocks y análisis de resultados | Pendiente de completar | No se incorporaron mocks porque las pruebas seleccionadas no dependen de servicios externos | Añadir mocks si se prueban componentes que consuman APIs o almacenamiento | Documentar salida real tras ejecutar las pruebas |
| Documento de cobertura de testing | Creado | `docs/cobertura-testing.md` | Describe las 15 pruebas y limitaciones | Actualizar con resultados reales tras ejecutar |
| Documento ERS actualizado | Pendiente | No se encontró ERS dentro del ZIP proporcionado | Incorporar la última versión del ERS original; no se inventó el documento del equipo | Requiere archivo original del ERS |
| GitHub público actualizado | No verificable | El ZIP no acredita acceso ni estado del repositorio remoto | Subir cambios a la rama correcta y confirmar que el repo sea público | Requiere acceso del usuario a GitHub |
| Compilación y lint | No verificados | Scripts `build` y `lint` existen en `package.json` | La instalación no pudo completar porque el entorno no resolvió `registry.npmjs.org` (`EAI_AGAIN`); por ello `karma`, `vite` y `eslint` no estuvieron disponibles | Reintentar `npm install`, `npm run build` y `npm run lint` |
| Preparación de Vercel y rutas SPA | Configuración agregada | `vercel.json` reescribe las rutas a `/index.html`; `BrowserRouter` está en `src/main.jsx` | Se agregó rewrite para rutas internas de React Router | Confirmar en un despliegue real |
| Variables de entorno | No se detectó configuración documentada en los archivos revisados | No hay archivo `.env.example` visible en la estructura inspeccionada | Revisar variables requeridas antes de publicar; no subir secretos | Pendiente revisión completa de dependencias/servicios |

## Comandos para validación local

```bash
npm install
npm run lint
npm test
npm run build
npm run preview
```

Para probar responsive manualmente, abrir DevTools y comprobar como mínimo 320, 375, 768, 1024 y 1440 píxeles; revisar Inicio, catálogo, detalle, carrito, login y contacto. Probar también recarga directa de `/products`, `/products/<id>` y `/carrito` después del despliegue.
