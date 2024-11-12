import { config } from "../../config";

export const myWidget = (cb) =>
  cloudinary.createUploadWidget(
    {
      cloudName: config.cloudinary.cloudName,
      uploadPreset: config.cloudinary.uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        cb(result);
      }
    }
  );
