/** @format */

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileName = file.fieldname + '-' + uniqueSuffix;
    cb(null, fileName);
  },
});

export const upload = multer({ storage: storage });
