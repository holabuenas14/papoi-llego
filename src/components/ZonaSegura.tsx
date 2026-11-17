import { AbsoluteFill } from "remotion";
import { ESTILOS_BASE, ESTILOS_GUIA, MEDIDAS } from "../styles/tokens";
import { ZONAS_SEGURAS } from "../styles/zonas-seguras";
import { FORMATO } from "../styles/formato";

export const ZonaSegura: React.FC = () => (
  <AbsoluteFill
    aria-hidden="true"
    style={ESTILOS_BASE.capaGuia}
  >
    <div
      style={ESTILOS_GUIA.superior}
    />
    <div
      style={ESTILOS_GUIA.inferior}
    />
    <div
      style={ESTILOS_GUIA.lateral}
    />
    <span
      style={{
        ...ESTILOS_GUIA.etiqueta,
        top: ZONAS_SEGURAS.superior + MEDIDAS.separacionEtiqueta,
        left: MEDIDAS.separacionEtiqueta,
      }}
    >
      {`Zona superior · ${ZONAS_SEGURAS.superior}px`}
    </span>
    <span
      style={{
        ...ESTILOS_GUIA.etiqueta,
        bottom: ZONAS_SEGURAS.inferior + MEDIDAS.separacionEtiqueta,
        right: ZONAS_SEGURAS.lateralDerecha + MEDIDAS.separacionEtiqueta,
      }}
    >
      {`Zona inferior · ${ZONAS_SEGURAS.inferior}px`}
    </span>
    <span
      style={{
        ...ESTILOS_GUIA.etiquetaLateral,
        top: FORMATO.height / MEDIDAS.divisorCentro,
        right: ZONAS_SEGURAS.lateralDerecha + MEDIDAS.separacionEtiqueta,
      }}
    >
      {`Reserva lateral · ${ZONAS_SEGURAS.lateralDerecha}px`}
    </span>
  </AbsoluteFill>
);
