import React from "react";
import YatoSearch from "../RinYato/YatoSearch";
import YatoSelect from "../RinYato/YatoSelect";
import provinces from "../provinces";
import YatoPriceInput from "../RinYato/YatoPriceInput";
import YatoButton from "../RinYato/YatoButton";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

function BrowseBar() {
  const [PropertyFor, setPropertyFor] = React.useState(null);
  const [PropertyType, setPropertyType] = React.useState(null);
  const [Province, setProvince] = React.useState(null);
  const [MinPrice, setMinPrice] = React.useState("");
  const [MaxPrice, setMaxPrice] = React.useState("");

  return (
    <div className="flex py-5 px-10 gap-5">
      <YatoSearch label="Location or Property"/>
      <div className="grid grid-cols-12 gap-5">
        <div className=" col-span-2">
          <YatoSelect
            id={"PropertyFor"}
            options={["Sale", "Rent", "Mortgage"]}
            label={"For: "}
            value={PropertyFor}
            setValue={setPropertyFor}
          />
        </div>
        <div className=" col-span-2">
          <YatoSelect
            id={"PropertyType"}
            options={["House", "Apartment", "Condo", "Land", "Farm"]}
            label={"Type: "}
            value={PropertyType}
            setValue={setPropertyType}
          />
        </div>
        <div className="col-span-3">
          <YatoSelect
            id={"Provice"}
            options={provinces}
            value={Province}
            setValue={setProvince}
          />
        </div>
        <div className=" col-span-2">
          <YatoPriceInput
            id={"MinPrice"}
            value={MinPrice}
            label={"Min Price: $"}
            setValue={setMinPrice}
          />
        </div>
        <div className=" col-span-2">
          <YatoPriceInput
            id={"MaxPrice"}
            value={MaxPrice}
            label={"Max Price: $$$"}
            setValue={setMaxPrice}
          />
        </div>
        <div className="col-span-1">
          <YatoButton>
            <TuneRoundedIcon className="" fontSize="medium" />
          </YatoButton>
        </div>
      </div>
    </div>
  );
}

export default BrowseBar;
