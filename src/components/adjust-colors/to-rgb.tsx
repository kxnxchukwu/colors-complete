import { hex } from 'color-convert';
import { useContext } from '../../context';
import LabeledInput from '../shared/labeled-input';

type HexToRGBProps = {
  hexColor: string;
};

const HexToRGB = ({ hexColor }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;
  const { dispatch } = useContext();

  const updateRGB = ({ red = r, green = g, blue = b }) => {
    dispatch({
      type: 'update-rgb-color',
      payload: {
        rgb: [red, green, blue],
      },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) =>
          updateRGB({ red: e.target.valueAsNumber, green: g, blue: b })
        }
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) => {
          updateRGB({ red: r, green: e.target.valueAsNumber, blue: b });
        }}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) =>
          updateRGB({ red: r, green: g, blue: e.target.valueAsNumber })
        }
      />
    </section>
  );
};

export default HexToRGB;
