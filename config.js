export const config = {
  api: {
    url: import.meta.env.VITE_CHURRASCO_URL_BASE,
  },
  cloudinary:{
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME, 
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PREST
  }
};