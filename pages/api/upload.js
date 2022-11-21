import cloudinary from "../../lib/cloudinary";

const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  },
});

const singleUpload = upload.single("image");
const singleUploadCtrl = (req, res) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({ message: "Image Upload Failed!" });
    }
  });
};

const path = require("path");
const DatauirParser = require("datauri/parser");
const parser = new DatauirParser();

const formatToBase64 = (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);

export default async function handler(req, res) {
  if (req.method === "POST") {
    singleUploadCtrl(req, res);
    const base64 = formatToBase64(req.body);
    console.log("Back", base64);
    // const { url } = await cloudinary.uploader.upload(req.body);
    res.status(200).json('hi');
  }
}
