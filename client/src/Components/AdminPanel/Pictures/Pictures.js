import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Pictures.css";

const Pictures = (props) => {
    const [data, setData] = useState([])

    const fetchExistingImages = async () => {
        try {
            const response = await axios.get("http://45.12.72.31:8082/work/get");
            const data = response.data.map((item) => ({
                ...item,
                fileBefore: item.fileBefore,
                fileAfter: item.fileAfter,
            }));
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExistingImages();
    }, [fetchExistingImages])

    const handleImageUpload = async (event) => {
        event.preventDefault();

        const fileBeforeInput = document.getElementById('beforeImage');
        const fileAfterInput = document.getElementById('afterImage');

        const fileBefore = fileBeforeInput.files[0];
        const fileAfter = fileAfterInput.files[0];

        const readerBefore = new FileReader();
        const readerAfter = new FileReader();

        readerBefore.onload = function () {
            const fileBeforeData = readerBefore.result;

            readerAfter.onload = function () {
                const fileAfterData = readerAfter.result;

                const title = document.getElementById('title').value;
                const content = document.getElementById('description').value;

                const data = {
                    fileBefore: fileBeforeData,
                    fileAfter: fileAfterData,
                    title: title,
                    content: content,
                };

                console.log(data);

                axios
                    .post("http://45.12.72.31:8082/work/post", data)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            };

            readerAfter.readAsDataURL(fileAfter);
        };

        readerBefore.readAsDataURL(fileBefore);
        fetchExistingImages();
    };



    const handleImageDelete = async (image) => {
        try {
            await axios.post(`http://45.12.72.31:8082/work/delete/${image.id}`);
            fetchExistingImages();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="DoPosle">
            <button onClick={() => { props.setBtn('') }} className="back-Btn">Назад</button>
            <h1 style={{color:"rgba(0,0,0,0.6)"}}>Загрузка</h1>
            <form onSubmit={handleImageUpload} className="upload-image">
                <label htmlFor="beforeImage">Изображение ДО:</label>
                <input className="fileInput"
                    type="file"
                    id="beforeImage"
                    accept="image/*"
                    required
                />
                <label htmlFor="afterImage">Изображение После:</label>
                <input className="fileInput"
                    type="file"
                    id="afterImage"
                    accept="image/*"
                    required
                />
                <input className="textInput"
                    type="text"
                    id="title"
                    placeholder="Заголовок"
                    required
                />
                <textarea className="areaInput"
                    id="description"
                    placeholder="Описание"
                    required
                />
                <button type="submit">Отправить</button>
            </form>
            <div className="Table">
                <table className="existing-images">
                    <thead>
                        <tr>
                            <th>Заголовок</th>
                            <th>Описание</th>
                            <th className="image-cont">Картинка ДО</th>
                            <th className="image-cont">Картинка ПОСЛЕ</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((image) => (
                            <tr key={image.id}>
                                <td>{image.title}</td>
                                <td style={{wordBreak:"break-all"}}>{image.content}</td>
                                <td className="image-cont">
                                    <img src={image.fileBefore} alt={image.title} className="image" />
                                </td>
                                <td className="image-cont">
                                    <img src={image.fileAfter} alt={image.title} className="image" />
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
        </div>
    );
};

export default Pictures;
