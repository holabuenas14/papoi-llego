# papoi-llego

Plantilla mínima de Remotion para preparar un infográfico vertical. El tema está por definir; el contenido visible inicial es únicamente «Infográfico: pendiente».

## Índice

1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Formato de salida](#formato-de-salida)
3. [Estado actual y próxima iteración](#estado-actual-y-próxima-iteración)
4. [Requisitos](#requisitos)
5. [Instalación y comandos](#instalación-y-comandos)
6. [Estructura del repositorio](#estructura-del-repositorio)
7. [Flujo de producción](#flujo-de-producción)
8. [Documentación de preproducción](#documentación-de-preproducción)
9. [Renders y entregables](#renders-y-entregables)
10. [Créditos, fuentes y licencias de recursos](#créditos-fuentes-y-licencias-de-recursos)

## Descripción del proyecto

Estructura base para producir con Remotion un infográfico animado vertical. El tema está por definir; por ahora, la única composición muestra «Infográfico: pendiente».

## Formato de salida

La composición única `Infografico` está configurada a **1080 × 1920 px**, **9:16**, **30 fps**. Las plataformas de destino están pendientes de definir. Los valores se centralizan en [`src/styles/formato.ts`](src/styles/formato.ts). La duración de 10 segundos es solo una vista previa técnica, no la duración objetivo.

## Estado actual y próxima iteración

- **Estado:** estructura base terminada; tema, guion, locución, estilo y storyboard pendientes.
- **Próxima iteración:** responder las preguntas de preproducción y acordar esos materiales antes de implementar escenas y animaciones.

## Requisitos

Se requiere **Node.js 24.22.2 LTS** (rango `>=24.22.2 <25.0.0`) y **npm 11.x** (rango `>=11 <12`). La versión de Node queda fijada en [`.nvmrc`](.nvmrc).

## Instalación y comandos

```bash
npm install
npm run dev       # Abrir Remotion Studio
npm run render    # Renderizar Infografico en out/infografico.mp4
npm run lint      # Ejecutar ESLint y la comprobación de TypeScript
```

## Estructura del repositorio

```text
.
├── docs/              # Plantillas de preproducción y fuentes
├── public/
│   ├── audio/
│   ├── fonts/
│   └── images/
└── src/
    ├── components/      # Componentes reutilizables
    ├── data/            # Datos separados de la vista
    ├── scenes/          # Una escena por componente
    ├── styles/          # Formato, zonas seguras y tokens
    ├── Root.tsx
    └── index.ts         # Registro de Remotion
```

Las carpetas todavía vacías se conservan con `.gitkeep`.

## Flujo de producción

Tema → guion → locución → estilo → storyboard → animación → render.

## Documentación de preproducción

Completar estas plantillas antes de añadir contenido:

- [Tema y alcance](docs/01-tema.md)
- [Guion](docs/02-guion.md)
- [Locución](docs/03-locucion.md)
- [Estilo visual](docs/04-estilo.md)
- [Storyboard](docs/05-storyboard.md)
- [Fuentes, datos y licencias](docs/fuentes.md)

## Renders y entregables

El entregable previsto es `out/infografico.mp4`, en MP4 H.264 con audio AAC. El render de marcador actual no contiene pista de audio porque la locución y la música siguen pendientes. `out/` no se sube a Git.

La guía de zonas seguras es inicial: reserva **250 px arriba** para encabezados, **340 px abajo** para descripciones y controles, y **120 px a la derecha** para botones laterales. Son márgenes orientativos para interfaces sociales, no una especificación universal. Se definen en [`src/styles/zonas-seguras.ts`](src/styles/zonas-seguras.ts) y se deben revisar según las plataformas acordadas. La superposición `showSafeZones` está desactivada por defecto.

## Créditos, fuentes y licencias de recursos

Registrar fuentes de datos, créditos y licencias en [`docs/fuentes.md`](docs/fuentes.md). Guardar los recursos en `public/` y no utilizar materiales sin una licencia o permiso claro.
