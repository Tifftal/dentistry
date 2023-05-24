import React, { useState, useEffect } from "react";
import axios from "axios";

const Pictures = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchExistingImages();
    },[])

    const fetchExistingImages = async () => {
        try {
            const response = await axios.get("http://localhost:8082/work/get");
            setData(response.data);
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
        event.preventDeault()
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
            fetchExistingImages();
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
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Описание:</label>
                    <textarea
                        id="description"
                        required
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>
            <table className="existing-images">
                <thead>
                    <tr>
                        <th>Заголовок</th>
                        <th>Картинка ДО</th>
                        <th>Картинка ПОСЛЕ</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((image) => (
                        <tr key={image.id}>
                            <td>{image.title}</td>
                            <td>
                                <img src={`data:image/jpg;base64,`+image.fileBefore} alt={image.title} className="image" />
                            </td>
                            <td>
                                <img src={`data:image/jpg;base64,`+image.fileAfter} alt={image.title} className="image" />
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
