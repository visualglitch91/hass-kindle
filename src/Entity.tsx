import hass from "./hass";
import { px } from "./styling";
import updater from "./updater";

const baseStyle = {
  width: px(70),
  height: px(70),
  background: "white",
  color: "black",
  border: `${px(1)} solid black`,
  borderRadius: px(4),
  fontSize: px(10),
  padding: px(4),
  cursor: "pointer",
  display: "inline-block",
};

const onStyle = {
  color: "white",
  background: "black",
};

export default function Entity({
  label,
  entityId,
  on,
}: {
  label: string;
  entityId: string;
  on: boolean;
}) {
  return (
    <button
      style={{ ...baseStyle, ...(on ? onStyle : {}) }}
      onClick={() => {
        hass("post", "services/homeassistant/toggle", {
          entity_id: entityId,
        }).then(() => setTimeout(() => updater.update(), 300));
      }}
    >
      {label}
    </button>
  );
}
