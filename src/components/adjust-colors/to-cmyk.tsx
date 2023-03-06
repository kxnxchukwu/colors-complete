import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { useContext } from '../../context';

type HexToCMYKProps = {
  hexColor: string;
};

const HexToCMYK = ({ hexColor }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;
  const { dispatch } = useContext();

  const updateCMYK = ({ cyan = c, magenta = m, yellow = y, key = k }) => {
    dispatch({
      type: 'update-cmyk-color',
      payload: {
        cmyk: [cyan, magenta, yellow, key],
      },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        type="number"
        value={c}
        onChange={(e) =>
          updateCMYK({
            cyan: e.target.valueAsNumber,
            magenta: m,
            yellow: y,
            key: k,
          })
        }
      />
      <LabeledInput
        label="M"
        type="number"
        value={m}
        onChange={(e) =>
          updateCMYK({
            cyan: c,
            magenta: e.target.valueAsNumber,
            yellow: y,
            key: k,
          })
        }
      />
      <LabeledInput
        label="Y"
        type="number"
        value={y}
        onChange={(e) =>
          updateCMYK({
            cyan: c,
            magenta: m,
            yellow: e.target.valueAsNumber,
            key: k,
          })
        }
      />
      <LabeledInput
        label="K"
        type="number"
        value={k}
        onChange={(e) =>
          updateCMYK({
            cyan: c,
            magenta: m,
            yellow: y,
            key: e.target.valueAsNumber,
          })
        }
      />
    </section>
  );
};

export default HexToCMYK;
