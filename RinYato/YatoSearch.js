import React from "react";
import { Search } from "@mui/icons-material";

function YatoSearch({ label, value, setValue }) {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          id="search"
          placeholder={label}
          className="bg-slate-100 focus:outline-none py-2.5 pl-12 pr-4 rounded-2xl"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}

export default YatoSearch;
