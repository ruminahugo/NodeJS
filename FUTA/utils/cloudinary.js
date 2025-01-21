import { v2 as cloudinary } from 'cloudinary';
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME, // Thay bằng cloud_name của bạn
  api_key: process.env.CLOUDINARY_API_KEY, // Thay bằng api_key của bạn
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY, // Thay bằng api_secret của bạn
});

export default cloudinary;
