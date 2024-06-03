import React, { useContext, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { InputContext } from "../App";

const InputColor = () => {
  const [color, setColor] = useState("#054080");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleColor = (color) => {
    setColor(color.hex);
  };
  const { inputValue, setInputValue } = useContext(InputContext);

  useEffect(() => {
    setInputValue({ ...inputValue, color: color });
  }, [color]);

  return (
    <div>
      <label className="font-semibold text-sm">Color</label>
      <div className="flex items-center gap-2">
        <div
          style={{ background: color }}
          className="w-10 h-8 cursor-pointer border-4"
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
        ></div>
        <span>{color}</span>
      </div>
      {displayColorPicker && (
        <div className="absolute mt-2">
          <ChromePicker color={color} onChange={handleColor} />
        </div>
      )}
    </div>
  );
};

export default InputColor;
/* d0d2d8f0-1ece-11ef-bff1-a71dc4037a46 */
