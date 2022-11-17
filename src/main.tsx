import { render } from "preact";
import Room from "./Room";
import updater from "./updater";

const root = document.getElementById("root")!;

const rooms = [
  {
    title: "Sala",
    entities: [
      { label: "Luz da Mesa", entityId: "switch.sala_luz_mesa" },
      { label: "Luz da Sala", entityId: "switch.sala_luz" },
      { label: "Luminária", entityId: "switch.sala_luminaria" },
      {
        label: "RGB TV",
        entityId: "light.sala_rgb_tv",
      },
      {
        label: "RGB Rack",
        entityId: "light.sala_rgb_rack",
      },
    ],
  },
  {
    title: "Escritório",
    entities: [
      { label: "Luz", entityId: "switch.escritorio_luz" },
      { label: "Luminária", entityId: "light.escritorio_luminaria" },
      { label: "RGB Mesa", entityId: "light.escritorio_rgb" },
      { label: "RGB Quadro", entityId: "light.escritorio_rgb_2" },
      { label: "Ventilador", entityId: "switch.escritorio_ventilador" },
    ],
  },
  {
    title: "Cozinha e Lavanderia",
    entities: [
      { label: "Luz da Cozinha", entityId: "switch.cozinha_luz" },
      { label: "Luz da Lavanderia", entityId: "switch.lavanderia_luz" },
      { label: "Luz do Banheiro", entityId: "switch.lavanderia_banheiro" },
    ],
  },
  {
    title: "Quarto",
    entities: [
      { label: "Luz", entityId: "switch.quarto_luz" },
      { label: "Ventilador", entityId: "switch.quarto_ventilador" },
      { label: "Abajur Direito", entityId: "switch.quarto_abajur_direito" },
      { label: "Abajur Esquerdo", entityId: "switch.quarto_abajur_esquerdo" },
      { label: "Sacada", entityId: "switch.sacada_luz" },
      { label: "Umidificador", entityId: "switch.quarto_umidificador" },
      { label: "Aquecedor", entityId: "switch.quarto_aquecedor" },
    ],
  },
  {
    title: "Banheiro",
    entities: [
      {
        label: "Luzes",
        entityId: "switch.banheiro_luz",
      },
    ],
  },
];

updater.setCallback((rawStates: any[]) => {
  const states = rawStates.reduce(
    (acc, state) => ({ ...acc, [state.entity_id]: state.state === "on" }),
    {} as Record<string, boolean>
  );

  render(
    <>
      {rooms.map((room, index) => (
        <Room key={index} states={states} {...room} />
      ))}
    </>,
    root
  );
});
