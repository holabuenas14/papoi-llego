import { AbsoluteFill } from "remotion";
import { ZonaSegura } from "../components/ZonaSegura";
import { ESTILOS_BASE } from "../styles/tokens";

type InfograficoProps = {
  showSafeZones: boolean;
};

export const Infografico: React.FC<InfograficoProps> = ({ showSafeZones }) => (
  <AbsoluteFill style={ESTILOS_BASE.infografico}>
    <span>Infográfico: pendiente</span>
    {showSafeZones ? <ZonaSegura /> : null}
  </AbsoluteFill>
);
