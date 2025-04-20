import React from 'react';
import '../styles/ColorPicker.css';

type ColorOption = 'yellow' | 'white' | 'rose';

interface Props {
  selectedColor: ColorOption;
  onChange: (color: ColorOption) => void;
}

const colorHex: Record<ColorOption, string> = {
  yellow: '#E6CA97',
  white: '#D9D9D9',
  rose: '#E1A4A9',
};

const colorLabels: Record<ColorOption, string> = {
  yellow: 'Yellow Gold',
  white: 'White Gold',
  rose: 'Rose Gold',
};

const ColorPicker: React.FC<Props> = ({ selectedColor, onChange }) => {
  return (
    <div className="color-picker-wrapper">
      <div className="color-dots">
        {(Object.keys(colorHex) as ColorOption[]).map((color) => (
          <button
            key={color}
            className={`color-dot ${selectedColor === color ? 'active' : ''}`}
            style={{ backgroundColor: colorHex[color] }}
            onClick={() => onChange(color)}
            aria-label={colorLabels[color]}
          />
        ))}
      </div>
      <div className="color-label">{colorLabels[selectedColor]}</div>
    </div>
  );
};

export default ColorPicker;
