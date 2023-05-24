import React, { useState } from "react";
import axios from "axios";

const Pictures = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1];
        const response = await axios.post("http://localhost:8082/api", {
          image: base64String,
        });
        const newImage = {
          name: file.name,
          url: response.data.url,
        };
        setImages([...images, newImage]);
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageDelete = async (imageName) => {
    try {
      await axios.post(`http://localhost:8082/api/${imageName}`);
      setImages(images.filter((image) => image.name !== imageName));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Picture Upload</h1>
      <input type="file" onChange={handleImageUpload} />
      <div className="image-list">
        {images.map((image) => (
          <div key={image.name} className="image-card">
            <img src={image.url} alt={image.name} className="image" />
            <p>{image.name}</p>
            <button
              onClick={() => handleImageDelete(image.name)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
