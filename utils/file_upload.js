/** @format */

import { v2 as cloud } from 'cloudinary';

import fs from 'fs';

cloud.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileToServer = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    console.log('localFilePath: ', localFilePath);
    const file = await cloud.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    console.log(
      'File upload on cloudinary succesfully on url: ___:    ',
      file.url
    );
    return file;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadFileToServer };
