import React from "react";

function YatoPriceInput({ value, setValue, id, label }) {
  const [formattedValue, setFormattedValue] = React.useState(
    value ? `$${value}` : ""
  );

  const handleFormat = (value) => {
    if (value === "") {
      setFormattedValue("");
      setValue("");
    } else {
      const formatted = `$${value}`;
      setFormattedValue(formatted);
      setValue(value);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const number = value.replace(/[^0-9]/g, "");
    handleFormat(number);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        id={id}
        name={id}
        placeholder={label}
        value={formattedValue}
        onChange={handleChange}
        className="bg-slate-100 rounded-2xl py-2.5 px-5 w-full"
      />
    </div>
  );
}

export default YatoPriceInput;
