import React from 'react';
import axios from 'axios';

const UploadForm = ({ setResult }) => {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://huggingface.co/spaces/jimil07/backend_retinal', formData);
      setResult(response.data);
    } catch (err) {
      console.error('Upload failed', err);
    }
  };

  return (
    <div>
      <h2>Upload Retinal Image</h2>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default UploadForm;