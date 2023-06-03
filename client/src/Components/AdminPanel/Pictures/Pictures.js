// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import "./Pictures.css";

// const Pictures = (props) => {
//     const [data, setData] = useState([])

//     const fetchExistingImages = async () => {
//         try {
//             const response = await axios.get("https://formulaulybki.ru/api/work/get");
//             const data = response.data.map((item) => ({
//                 ...item,
//                 fileBefore: item.fileBefore,
//                 fileAfter: item.fileAfter,
//             }));
//             setData(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         fetchExistingImages();
//     }, [fetchExistingImages])

//     const handleImageUpload = async (event) => {
//         event.preventDefault();

//         const fileBeforeInput = document.getElementById('beforeImage');
//         const fileAfterInput = document.getElementById('afterImage');

//         const fileBefore = fileBeforeInput.files[0];
//         const fileAfter = fileAfterInput.files[0];

//         const readerBefore = new FileReader();
//         const readerAfter = new FileReader();

//         readerBefore.onload = function () {
//             const fileBeforeData = readerBefore.result;

//             readerAfter.onload = function () {
//                 const fileAfterData = readerAfter.result;

//                 const title = document.getElementById('title').value;
//                 const content = document.getElementById('description').value;

//                 const data = {
//                     fileBefore: fileBeforeData,
//                     fileAfter: fileAfterData,
//                     title: title,
//                     content: content,
//                 };

//                 console.log(data);

//                 axios
//                     .post("https://formulaulybki.ru/api/work/post", data)
//                     .then(function (response) {
//                         console.log(response.data);
//                     })
//                     .catch(function (error) {
//                         console.log(error);
//                     });
//             };

//             readerAfter.readAsDataURL(fileAfter);
//         };

//         readerBefore.readAsDataURL(fileBefore);
//         fetchExistingImages();
//     };



//     const handleImageDelete = async (image) => {
//         try {
//             await axios.post(`https://formulaulybki.ru/api/work/delete/${image.id}`);
//             fetchExistingImages();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="DoPosle">
//             <button onClick={() => { props.setBtn('') }} className="back-Btn">Назад</button>
//             <h1 style={{color:"rgba(0,0,0,0.6)"}}>Загрузка</h1>
//             <form onSubmit={handleImageUpload} className="upload-image">
//                 <label htmlFor="beforeImage">Изображение ДО:</label>
//                 <input className="fileInput"
//                     type="file"
//                     id="beforeImage"
//                     accept="image/*"
//                     required
//                 />
//                 <label htmlFor="afterImage">Изображение После:</label>
//                 <input className="fileInput"
//                     type="file"
//                     id="afterImage"
//                     accept="image/*"
//                     required
//                 />
//                 <input className="textInput"
//                     type="text"
//                     id="title"
//                     placeholder="Заголовок"
//                     required
//                 />
//                 <textarea className="areaInput"
//                     id="description"
//                     placeholder="Описание"
//                     required
//                 />
//                 <button type="submit">Отправить</button>
//             </form>
//             <div className="Table">
//                 <table className="existing-images">
//                     <thead>
//                         <tr>
//                             <th>Заголовок</th>
//                             <th>Описание</th>
//                             <th className="image-cont">Картинка ДО</th>
//                             <th className="image-cont">Картинка ПОСЛЕ</th>
//                             <th>Действие</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((image) => (
//                             <tr key={image.id}>
//                                 <td>{image.title}</td>
//                                 <td style={{wordBreak:"break-all"}}>{image.content}</td>
//                                 <td className="image-cont">
//                                     <img src={image.fileBefore} alt={image.title} className="image" />
//                                 </td>
//                                 <td className="image-cont">
//                                     <img src={image.fileAfter} alt={image.title} className="image" />
//                                 </td>
//                                 <td>
//                                     <button
//                                         onClick={() => handleImageDelete(image)}
//                                         className="delete-button"
//                                     >
//                                         Удалить
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Pictures;

import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Pictures.css";

const Pictures = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchExistingImages();
  }, []);

  const fetchExistingImages = async () => {
    try {
      const response = await axios.get("https://formulaulybki.ru/api/work/get");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExistingImages();
  }, []);

  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const maxWidth = 800; // Максимальная ширина изображения
      const maxHeight = 800; // Максимальная высота изображения
      const image = new Image();

      image.onload = () => {
        let width = image.width;
        let height = image.height;

        // Проверка и установка новых размеров, если необходимо
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.max(width / maxWidth, height / maxHeight);
          width = Math.round(width / ratio);
          height = Math.round(height / ratio);
        }

        // Создание элемента canvas для изменения размеров изображения
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        // Изменение размеров изображения на canvas
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);

        // Получение сжатого изображения в формате base64
        const compressedDataUrl = canvas.toDataURL(file.type);

        resolve(compressedDataUrl);
      };

      image.onerror = (error) => {
        reject(error);
      };

      image.src = URL.createObjectURL(file);
    });
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();

    const fileBeforeInput = document.getElementById("beforeImage");
    const fileAfterInput = document.getElementById("afterImage");

    const fileBefore = fileBeforeInput.files[0];
    const fileAfter = fileAfterInput.files[0];

    const compressedFileBefore = await compressImage(fileBefore);
    const compressedFileAfter = await compressImage(fileAfter);

    const title = document.getElementById("title").value;
    const content = document.getElementById("description").value;

    const data = {
      fileBefore: compressedFileBefore,
      fileAfter: compressedFileAfter,
      title: title,
      content: content,
    };

    console.log(data);

    axios
      .post("https://formulaulybki.ru/api/work/post", data)
      .then(function (response) {
        console.log(response.data);
        fetchExistingImages();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleImageDelete = async (image) => {
    try {
      await axios.post(`https://formulaulybki.ru/api/work/delete/${image.id}`);
      fetchExistingImages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="DoPosle">
      <button onClick={() => props.setBtn("")} className="back-Btn">
        Назад
      </button>
      <h1 style={{ color: "rgba(0,0,0,0.6)" }}>Загрузка</h1>
      <form onSubmit={handleImageUpload} className="upload-image">
        <label htmlFor="beforeImage">Изображение ДО:</label>
        <input
          className="fileInput"
          type="file"
          id="beforeImage"
          accept="image/*"
          required
        />
        <label htmlFor="afterImage">Изображение После:</label>
        <input
          className="fileInput"
          type="file"
          id="afterImage"
          accept="image/*"
          required
        />
        <input
          className="textInput"
          type="text"
          id="title"
          placeholder="Заголовок"
        />
        <textarea
          className="areaInput"
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
                <td style={{ wordBreak: "break-all" }}>{image.content}</td>
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
