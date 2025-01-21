import cloudinary from '../../utils/cloudinary';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { image } = req.body; // Nhận file image dưới dạng base64 hoặc link URL
      const uploadResult = await cloudinary.uploader.upload(image, {
        folder: 'futa', // Thay thế bằng tên folder Cloudinary của bạn
      });

      res.status(200).json({ success: true, url: uploadResult.secure_url });
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      res.status(500).json({ success: false, message: 'Upload failed', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
