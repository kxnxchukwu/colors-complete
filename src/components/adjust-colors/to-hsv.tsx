import { hex } from 'color-convert';
import { useContext } from '../../context';
import LabeledInput from '../shared/labeled-input';

type HexToHSVProps = {
  hexColor: string;
};

const HexToHSV = ({ hexColor }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;
  const { dispatch } = useContext();

  const updateHSV = ({ hue = h, saturation = s, value = v }) => {
    dispatch({
      type: 'update-hsv-color',
      payload: {
        hsv: [hue, saturation, value],
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
          updateHSV({ hue: e.target.valueAsNumber, saturation: s, value: v })
        }
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) =>
          updateHSV({
            hue: h,
            saturation: e.target.valueAsNumber,
            value: v,
          })
        }
      />
      <LabeledInput
        label="V"
        type="number"
        value={v}
        onChange={(e) =>
          updateHSV({
            hue: h,
            saturation: s,
            value: e.target.valueAsNumber,
          })
        }
      />
    </section>
  );
};

export default HexToHSV;
