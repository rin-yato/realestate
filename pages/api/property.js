import { createProperty } from "../../lib/Model/Property";
import cloudinary from "../../lib/cloudinary";

export default async function handler(req, res) {
  const { name, description, price, location, owner, images } = req.body;

  const uploadRes = await cloudinary.uploader.upload(images, {
    upload_preset: "realestate",
  });

  const id = await createProperty({
    name,
    description,
    price,
    location,
    images: uploadRes.secure_url,
    owner,
  });

  if (id) {
    res.status(200).json({ id });
  }
}
