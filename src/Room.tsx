import Entity from "./Entity";
import { px } from "./styling";

export default function Room({
  title,
  entities,
  states,
}: {
  title: string;
  entities: { label: string; entityId: string }[];
  states: Record<string, boolean>;
}) {
  const rows: any[] = [];

  entities.forEach((entity, index) => {
    if (index % 5 === 0) {
      rows.push([]);
    }

    rows[rows.length - 1].push(
      <td key={index}>
        <Entity
          key={entity.entityId}
          on={states[entity.entityId]}
          {...entity}
        />
      </td>
    );
  });
  return (
    <div style={{ marginBottom: px(12) }}>
      <h4
        style={{
          margin: px(0, 6, 0),
          fontSize: px(18),
        }}
      >
        {title}
      </h4>
      <table style={{ borderSpacing: px(6) }}>
        <tbody>
          {rows.map((cells, index) => (
            <tr key={index}>{cells}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
