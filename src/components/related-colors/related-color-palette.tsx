import { useContext } from 'react';
import { ColorContext } from '../../context';
import ColorChangeSwatch from '../shared/color-change-swatch';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
};

const RelatedColorPalette = ({
  title,
  hexColors,
}: RelatedColorPaletteProps) => {
  const { dispatch } = useContext(ColorContext);
  const handleClick = (hexColor: string) => {
    dispatch({
      type: 'update-hex-color',
      payload: {
        hexColor: hexColor,
      },
    });
  };
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="h-full w-full"
              onClick={() => handleClick(hexColor)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
