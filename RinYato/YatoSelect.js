import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClickAwayListener } from "@mui/material";

function YatoSelect({ id, options, label, value, setValue }) {
  const [selected, setSelected] = React.useState(value ? value : options[0]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    setValue(option);
  };

  React.useEffect(() => {
    setValue(selected);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="relative">
        <div
          className="flex bg-slate-100 active:scale-90 duration-200 cursor-pointer rounded-2xl py-2.5 px-5 mb-3"
          onClick={toggle}
        >
          <input type="hidden" id={id} name={id} value={selected} />
          <p className="text-center w-full">
            {label} {selected}
          </p>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <ClickAwayListener onClickAway={toggle}>
              <motion.div
                initial={{ scale: 0, opacity: 0, transformOrigin: "top" }}
                animate={{ scale: 1, opacity: 1, transformOrigin: "top" }}
                exit={ { scale: 0, opacity: 0, transformOrigin: "top" } }
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute left-0 w-full z-50 flex flex-col gap-2 p-2 bg-slate-100 rounded-2xl max-h-72 overflow-y-auto"
              >
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`hover:bg-slate-200 cursor-pointer px-5 py-2 text-center rounded-lg ${
                      option === selected ? "bg-slate-200" : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </motion.div>
            </ClickAwayListener>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default YatoSelect;
