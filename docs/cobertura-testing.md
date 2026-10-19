# Documento de cobertura de testing — Proyecto Sigma / GameBites

## Alcance

Se definieron 15 pruebas unitarias distribuidas en cinco componentes React. La implementación usa Jasmine y Karma, de acuerdo con la pauta de la Evaluación Parcial 2. Las pruebas montan componentes en un DOM y verifican salidas observables. `MemoryRouter` proporciona el contexto requerido por los enlaces de React Router.

| Componente | Prueba 1 | Prueba 2 | Prueba 3 |
|---|---|---|---|
| `Badge` | Renderiza el contenido hijo | Usa la variante predeterminada | Aplica variante y clase personalizada |
| `Price` | Formatea el importe en CLP | Gestiona importe ausente | Combina clases CSS |
| `ProductGrid` | Mensaje personalizado sin productos | Una tarjeta por producto | Nombre, categoría y precio |
| `SectionHeading` | Título y subtítulo | Omite ceja opcional ausente | Enlace de acción configurado |
| `Navbar` | Renderiza navegación y estado inicial del menú | Lee el contador del carrito desde `localStorage` | Muestra el acceso de administración según el rol |

## Ejecución

```bash
npm install
npm test
```

Karma requiere Google Chrome o Chromium instalado para ejecutar `ChromeHeadless`. Si el equipo usa una ruta personalizada de Chrome, debe configurarse en el entorno local antes de ejecutar las pruebas.

## Resultado y limitaciones

Las pruebas están implementadas, pero sus resultados quedan **pendientes de ejecución** hasta instalar todas las dependencias y ejecutar `npm test` en un entorno con Chrome/Chromium. En esta revisión, `npm install` no pudo acceder a `registry.npmjs.org` por un error DNS (`EAI_AGAIN`), por lo que no se pudo regenerar el `package-lock.json` con las nuevas dependencias. En un equipo con acceso a npm, ejecuta `npm install` y conserva el `package-lock.json` actualizado antes de subir los cambios. No se declara cobertura porcentual de líneas porque aún no se ha generado un informe instrumental de cobertura. El alcance documentado es por casos de comportamiento, no por porcentaje de líneas. Estas pruebas no sustituyen las comprobaciones manuales de responsividad, formularios, carrito completo ni autenticación.
