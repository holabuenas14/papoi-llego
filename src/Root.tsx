import { Composition as RemotionComposition } from "remotion";
import { Infografico } from "./scenes/Infografico";
import { FORMATO } from "./styles/formato";
import { DURACION_VISTA_PREVIA_SEGUNDOS } from "./styles/tokens";

export const RemotionRoot: React.FC = () => (
  <RemotionComposition
    id={FORMATO.id}
    component={Infografico}
    durationInFrames={DURACION_VISTA_PREVIA_SEGUNDOS * FORMATO.fps}
    fps={FORMATO.fps}
    width={FORMATO.width}
    height={FORMATO.height}
    defaultProps={{ showSafeZones: false }}
  />
);
