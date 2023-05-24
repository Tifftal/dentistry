import React, {useState, useEffect} from "react";
import './portfolio.css';
import axios from "axios";

const ImageComponent = () => {
  const [base64Image, setBase64Image] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch('../../IMG/protezirovanie_zubov_foto_do_i_posle_7.jpg');
        const blob = await response.blob();

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setBase64Image(base64Data);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.log(error);
      }
    };

    loadImage();
  }, []);

  return <img src={base64Image} alt="Image" />;
};


const Portfolio = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchExistingImages();
    }, [])

    const fetchExistingImages = async () => {
        try {
            const response = await axios.get("http://localhost:8082/work/get");
            // const data = response.data.map((item) => ({
            //   ...item,
            //   fileBefore: Uint8Array.from(item.fileBefore, (c) => c.charCodeAt(0)),
            //   fileAfter: Uint8Array.from(item.fileAfter, (c) => c.charCodeAt(0)),
            // }));
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="backgrPort">
            <div className="portfolio">
                <div className="titlePort">
                    <h1>Портфолио</h1>
                </div>
                <div>
                    <ul class="breadcrumbPort">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/doctors">Команда</a></li>
                        <li>Портфолио</li>
                    </ul>
                </div>
                                <img src="../../IMG/protezirovanie_zubov_foto_do_i_posle_7.jpg" />
                                имаге компонент
                                <ImageComponent />
                {data.map(image => (
                    <div className="clinicalCase">
                        <div className="caseContainer">
                            <div className="case">
                                <img src={image.fileBefore} alt={image.title} />
                            </div>
                            <div className="case">
                                {/* <img src="../../IMG/protezirovanie_zubov_foto_do_i_posle_7-2.jpg" /> */}
                                <img src={image.fileAfter} alt={image.title} />
                            </div>
                        </div>
                        <div className="case">
                            <h3>
                                {image.title}
                            </h3>
                            <p>
                                {/* Жалобы: боль в зубе при надкусывании.
                                В другой клинике сказали, что необходимо удаление, т. к большая киста.
                                Была удалена не корректная пломба, извлечён металлический штифт. В итоге спасли зуб, киста зажила. */}
                                {image.content}
                            </p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Portfolio

