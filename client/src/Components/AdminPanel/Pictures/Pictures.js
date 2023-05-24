import React, { useState, useEffect } from "react";
import axios from "axios";

const Pictures = () => {
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  useEffect(() => {
    fetchExistingImages();
  }, []);

  const fetchExistingImages = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api");
      setExistingImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files;

    try {
      const promises = Array.from(files).map(async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onloadend = async () => {
            const base64String = reader.result.split(",")[1];
            const response = await axios.post("http://localhost:8082/api", {
              image: base64String,
            });
            resolve(response.data.url);
          };
        });
      });

      const urls = await Promise.all(promises);

      const newImages = [];
      for (let i = 0; i < urls.length; i += 2) {
        const beforeImage = {
          name: `Before ${i / 2 + 1}`,
          url: urls[i],
        };
        const afterImage = {
          name: `After ${i / 2 + 1}`,
          url: urls[i + 1],
        };
        newImages.push([beforeImage, afterImage]);
      }

      setImages([...images, ...newImages]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageDelete = async (image) => {
    try {
      await axios.delete(`http://localhost:8082/api/${image.name}`);
      setImages(images.filter((pair) => pair[0].name !== image.name));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Picture Upload</h1>
      <input type="file" multiple onChange={handleImageUpload} />
      <div className="image-pairs">
        {images.map((pair, index) => (
          <div key={index} className="image-pair">
            <div>
              <h2>{pair[0].name}</h2>
              <img src={pair[0].url} alt={pair[0].name} className="image" />
              <button
                onClick={() => handleImageDelete(pair[0])}
                className="delete-button"
              >
                Delete
              </button>
            </div>
            <div>
              <h2>{pair[1].name}</h2>
              <img src={pair[1].url} alt={pair[1].name} className="image" />
              <button
                onClick={() => handleImageDelete(pair[1])}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2>Existing Images</h2>
      <table className="existing-images">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {existingImages.map((image) => (
            <tr key={image.name}>
              <td>{image.name}</td>
              <td>
                <img src={image.url} alt={image.name} className="image" />
              </td>
              <td>
                <button
                  onClick={() => handleImageDelete(image)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pictures;
