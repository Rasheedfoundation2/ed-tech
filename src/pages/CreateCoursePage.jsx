// src/pages/CreateCoursePage.jsx
import React, { useState } from 'react';
import '../css/CreateCoursePage.css';

const CreateCoursePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setThumbnail(null);
      setPreviewUrl(null);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.price || Number(formData.price) < 0) newErrors.price = 'Enter a valid price';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formattedPrice = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(Number(formData.price));

    alert(`Course created successfully!\n\nTitle: ${formData.title}\nPrice: ${formattedPrice}`);
    
    setFormData({ title: '', description: '', price: '' });
    setThumbnail(null);
    setPreviewUrl(null);
    setErrors({});
  };

  return (
    <div className="course-container">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
          {errors.description && <div className="error">{errors.description}</div>}
        </div>

        <div className="form-group">
          <label>Price (INR ₹) *</label>
          <input
            type="number"
            name="price"
            min="1000"
            step="500"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <div className="error">{errors.price}</div>}
        </div>

        <div className="form-group">
          <label>Thumbnail</label>
          <input type="file" accept="image/*" onChange={handleThumbnailChange} />
          {previewUrl && <img src={previewUrl} alt="Thumbnail" className="thumbnail-preview" />}
        </div>

        <button type="submit" className="submit-button">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
