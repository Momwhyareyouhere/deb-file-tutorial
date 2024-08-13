import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/public/uploads');
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Something went wrong during file upload.' });
    }

    const file = files.file[0];
    const filePath = `/uploads/${path.basename(file.filepath)}`;
    res.status(200).json({ downloadLink: filePath });
  });
}
