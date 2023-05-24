import React, { useState, useEffect } from "react";
import axios from "axios";

const Pictures = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchExistingImages();
    }, [])

    const fetchExistingImages = async () => {
        try {
          const response = await axios.get("http://45.12.72.31:8082/work/get");
          const data = response.data.map((item) => ({
            ...item,
            fileBefore:item.fileBefore,
            fileAfter: item.fileAfter,
          }));
          setData(data);
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
        <div>
            <button onClick={()=>{props.setBtn('')}}>Назад</button>
            <h1>Загрузка</h1>
            <form onSubmit={handleImageUpload}>
                <div>
                    <label htmlFor="beforeImage">Изображение ДО:</label>
                    <input
                        type="file"
                        id="beforeImage"
                        accept="image/*"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="afterImage">Изображение После:</label>
                    <input
                        type="file"
                        id="afterImage"
                        accept="image/*"
                        required
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
                                <img src={image.fileBefore} alt={image.title} className="image" />
                            </td>
                            <td>
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
    );
};

export default Pictures;
