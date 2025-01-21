import { useState } from 'react';
import axios from 'axios';

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !description) {
      alert('Please fill all fields');
      return;
    }

    setUploading(true);
    try {
      // Upload image to Cloudinary
      const uploadResponse = await axios.post('/api/upload', {
        image: preview, // Base64 image
      });

      const { url } = uploadResponse.data;

      // Save data to your database through API
      await axios.post('https://api-67sm.onrender.com/api/sliders', {
        imageUrl: url,
        title,
        description,
      });

      alert('Image uploaded and data saved successfully!');
      setImage(null);
      setPreview('');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        {preview && <img src={preview} alt="Preview" style={{ width: '200px', height: '200px' }} />}
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
}
