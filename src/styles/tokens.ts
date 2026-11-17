import { ZONAS_SEGURAS } from "./zonas-seguras";

export const DURACION_VISTA_PREVIA_SEGUNDOS = 10;

export const MEDIDAS = {
  cero: 0,
  bordeGuia: 2,
  separacionEtiqueta: 8,
  tamanoEtiqueta: 24,
  tamanoEtiquetaLateral: 20,
  divisorCentro: 2,
} as const;

export const COLORES_GUIA = {
  zona: "rgba(255, 0, 0, 0.12)",
  borde: "rgba(255, 0, 0, 0.8)",
} as const;

export const ESTILOS_BASE = {
  infografico: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  capaGuia: {
    pointerEvents: "none" as const,
    overflow: "hidden" as const,
  },
} as const;

export const ESTILOS_GUIA = {
  superior: {
    position: "absolute" as const,
    top: MEDIDAS.cero,
    left: MEDIDAS.cero,
    right: MEDIDAS.cero,
    height: ZONAS_SEGURAS.superior,
    backgroundColor: COLORES_GUIA.zona,
    borderBottom: `${MEDIDAS.bordeGuia}px dashed ${COLORES_GUIA.borde}`,
    boxSizing: "border-box" as const,
  },
  inferior: {
    position: "absolute" as const,
    bottom: MEDIDAS.cero,
    left: MEDIDAS.cero,
    right: MEDIDAS.cero,
    height: ZONAS_SEGURAS.inferior,
    backgroundColor: COLORES_GUIA.zona,
    borderTop: `${MEDIDAS.bordeGuia}px dashed ${COLORES_GUIA.borde}`,
    boxSizing: "border-box" as const,
  },
  lateral: {
    position: "absolute" as const,
    top: ZONAS_SEGURAS.superior,
    bottom: ZONAS_SEGURAS.inferior,
    right: MEDIDAS.cero,
    width: ZONAS_SEGURAS.lateralDerecha,
    backgroundColor: COLORES_GUIA.zona,
    borderLeft: `${MEDIDAS.bordeGuia}px dashed ${COLORES_GUIA.borde}`,
    boxSizing: "border-box" as const,
  },
  etiqueta: {
    position: "absolute" as const,
    color: COLORES_GUIA.borde,
    fontSize: MEDIDAS.tamanoEtiqueta,
    fontFamily: "sans-serif",
  },
  etiquetaLateral: {
    position: "absolute" as const,
    color: COLORES_GUIA.borde,
    fontSize: MEDIDAS.tamanoEtiquetaLateral,
    fontFamily: "sans-serif",
  },
} as const;
