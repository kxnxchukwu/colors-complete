import { hex } from 'color-convert';
import { useContext } from '../../context';
import LabeledInput from '../shared/labeled-input';

type HexToHSLProps = {
  hexColor: string;
};

const HexToHSL = ({ hexColor }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;
  const { dispatch } = useContext();
  const updateHSL = ({ hue = h, saturation = s, lightness = l }) => {
    dispatch({
      type: 'update-hsl-color',
      payload: {
        hsl: [hue, saturation, lightness],
      },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) =>
          updateHSL({
            hue: e.target.valueAsNumber,
            saturation: s,
            lightness: l,
          })
        }
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) =>
          updateHSL({
            hue: h,
            saturation: e.target.valueAsNumber,
            lightness: l,
          })
        }
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) =>
          updateHSL({
            hue: h,
            saturation: s,
            lightness: e.target.valueAsNumber,
          })
        }
      />
    </section>
  );
};

export default HexToHSL;
