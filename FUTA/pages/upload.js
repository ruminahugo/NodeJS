import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]); // Danh sách ảnh
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Lấy danh sách ảnh từ server
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://api-67sm.onrender.com/api/sliders');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

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

    if (!title || !description || (!image && !editMode)) {
      alert('Please fill all fields');
      return;
    }

    setUploading(true);
    try {
      let imageUrl = preview;

      // Nếu không ở chế độ chỉnh sửa, upload ảnh mới
      if (!editMode && image) {
        const uploadResponse = await axios.post('/api/upload', { image: preview });
        imageUrl = uploadResponse.data.url;
      }

      if (editMode) {
        // Chỉnh sửa ảnh
        await axios.put(`https://api-67sm.onrender.com/api/sliders/${editId}`, {
          imageUrl,
          title,
          description,
        });
        alert('Image updated successfully!');
      } else {
        // Thêm ảnh mới
        await axios.post('https://api-67sm.onrender.com/api/sliders', {
          imageUrl,
          title,
          description,
        });
        alert('Image uploaded successfully!');
      }

      setImage(null);
      setPreview('');
      setTitle('');
      setDescription('');
      setEditMode(false);
      setEditId(null);

      // Tải lại danh sách
      fetchImages();
    } catch (error) {
      console.error('Error uploading or updating:', error);
      alert('Failed to upload or update image');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (id, currentTitle, currentDescription, currentImageUrl) => {
    setEditMode(true);
    setEditId(id);
    setTitle(currentTitle);
    setDescription(currentDescription);
    setPreview(currentImageUrl);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      await axios.delete(`https://api-67sm.onrender.com/api/sliders/${id}`);
      alert('Image deleted successfully!');
      fetchImages(); // Tải lại danh sách
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };

  return (
    <div className="container">
      <h1>{editMode ? 'Edit Image' : 'Upload Image'}</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={editMode} // Không cho chọn ảnh khi chỉnh sửa
          />
        </div>
        <br />
        {preview && <img src={preview} alt="Preview" style={{ width: '200px', height: '200px' }} />}
        <br />
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" disabled={uploading}>
          {uploading ? 'Saving...' : editMode ? 'Update' : 'Upload'}
        </button>
      </form>

      <hr />

      <h2>Uploaded Images</h2>
      <div className="row">
        {images.map((img) => (
          <div key={img.id} className="col-md-4">
            <div className="card">
              <img
                src={img.imageUrl}
                alt={img.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
                <p className="card-text">{img.description}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(img.id, img.title, img.description, img.imageUrl)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(img.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
