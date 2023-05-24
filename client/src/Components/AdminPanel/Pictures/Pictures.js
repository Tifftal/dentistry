import React, { useState, useEffect } from "react";
import axios from "axios";

const Pictures = () => {
    const [images, setImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchExistingImages();
    }, []);

    const fetchExistingImages = async () => {
        try {
            const response = await axios.get("http://localhost:8082/work/get");
            setExistingImages(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    //id
    //fileAfter
    //fileBefore
    //title
    //content

    const handleImageUpload = async (event) => {
        const fileBefore = document.getElementById('beforeImage').value;
        const fileAfter = document.getElementById('afterImage').value;

        const title = document.getElementById('title').value;
        const content = document.getElementById('description').value;

        const data = {
            fileBefore: btoa(fileBefore),
            fileAfter: btoa(fileAfter),
            title: title,
            content: content,
        }

        axios.post("http://localhost:8082/work/post", data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleImageDelete = async (image) => {
        try {
            await axios.post(`http://localhost:8082/work/delete/${image.id}`);
            setImages(images.filter((pair) => pair[0].name !== image.name));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Загрузка</h1>
            <form onSubmit={handleImageUpload}>
                <div>
                    <label htmlFor="beforeImage">Изображение ДО:</label>
                    <input
                        type="file"
                        id="beforeImage"
                        accept="image/*"
                        required
                        multiple
                    />
                </div>
                <div>
                    <label htmlFor="afterImage">Изображение После:</label>
                    <input
                        type="file"
                        id="afterImage"
                        accept="image/*"
                        required
                        multiple
                    />
                </div>
                <div>
                    <label htmlFor="title">Заголовок:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Описание:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>
            <div className="image-pairs">
                {images.map((pair, index) => (
                    <div className="image-pair" key={index}>
                        <div>
                            <h2>{pair[0].name}</h2>
                            <img src={pair[0].url} alt={pair[0].name} className="image" />
                            <button
                                onClick={() => handleImageDelete(pair[0])}
                                className="delete-button"
                            >
                                Удалить
                            </button>
                        </div>
                        <div>
                            <h2>{pair[1].name}</h2>
                            <img src={pair[1].url} alt={pair[1].name} className="image" />
                            <button
                                onClick={() => handleImageDelete(pair[1])}
                                className="delete-button"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <table className="existing-images">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Картинка</th>
                        <th>Действие</th>
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
                                    Удалить
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
