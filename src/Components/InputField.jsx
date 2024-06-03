import React, { useContext } from "react";
import { InputContext } from "../App";

const InputField = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, url: e.target.value });
  };
  return (
    <div>
      <label className="font-semibold text-sm">Your URL</label>
      <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
        placeholder="Intoduci aqui tu URL"
        value={inputValue.url}
        onChange={handleInputValue}
      />
    </div>
  );
};

export default InputField;
