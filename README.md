# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Pruebas unitarias (Jasmine + Karma)

Se incorporó una suite inicial de 15 pruebas, con tres casos para cada componente seleccionado: `Badge`, `Price`, `ProductGrid`, `SectionHeading` y `Navbar`.

```bash
npm install
npm test
```

Karma ejecuta Chrome en modo headless, por lo que se requiere Google Chrome o Chromium. Consulta `docs/cobertura-testing.md` para el alcance y las limitaciones de la cobertura.

## Compilación y despliegue

```bash
npm run lint
npm run build
npm run preview
```

La configuración `vercel.json` permite que React Router atienda rutas internas al refrescar la página. Los pasos para conectar GitHub y Vercel están en `docs/despliegue-vercel.md`.
