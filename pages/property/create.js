import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
const axios = require("axios");

function Create() {
  const formatToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    data.images = await formatToBase64(e.target.images.files[0]);
    const res = await axios.post("/api/property", data);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <InputLabel color="primary">Name</InputLabel>
          <Input color="primary" name="name" />
        </div>
        <div>
          <InputLabel color="primary">Description</InputLabel>
          <Input color="primary" name="description" />
        </div>
        <div>
          <InputLabel color="primary">Price</InputLabel>
          <Input color="primary" name="price" />
        </div>
        <div>
          <InputLabel color="primary">Location</InputLabel>
          <Input color="primary" name="location" />
        </div>
        <div>
          <InputLabel color="primary">Images</InputLabel>
          <Input color="primary" name="images" type="file" />
        </div>
        <div>
          <InputLabel color="primary">Owner</InputLabel>
          <Input color="primary" name="owner" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
