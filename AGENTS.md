# Guía del repositorio

- **Alcance:** este repositorio prepara un infográfico animado con Remotion. `README.md` es la fuente de verdad del estado del proyecto.
- **Formato:** vertical, 1080 × 1920 a 30 fps. Mantener textos, datos y subtítulos dentro de las zonas seguras definidas en `src/styles/`.
- **Orden de trabajo:** no animar una escena sin que su guion, locución y estilo estén definidos en `docs/`. Si falta información, preguntar o dejar una nota en el pull request; no inventarla.
- **Código:** una escena por archivo en `src/scenes/`; datos en `src/data/`. No fijar colores, medidas ni tiempos en componentes: usar `src/styles/`. Calcular duraciones en frames a partir de segundos × fps.
- **Recursos:** guardarlos en `public/`, registrar fuente y licencia en `docs/fuentes.md`, y no usar recursos sin licencia clara ni generadores de imágenes.
- **Validación:** ejecutar `npm run lint` antes de dar un cambio por terminado.
- **Renders:** guardarlos en `out/`; no subirlos a Git.
- **Sincronía:** mantener `docs/`, el código y `README.md` sincronizados cuando algo cambie.
