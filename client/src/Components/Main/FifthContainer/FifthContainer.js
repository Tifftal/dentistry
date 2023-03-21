import React, { useState } from "react";

const FifthContainer = () => {
    const [openDropDown1, setOpenDropDown1] = useState(false);
    const [openDropDown2, setOpenDropDown2] = useState(false);
    const [openDropDown3, setOpenDropDown3] = useState(false);
    const toggleMenu1 = () => {
        setOpenDropDown1(!openDropDown1)
    }
    
    const toggleMenu2 = () => {
        setOpenDropDown2(!openDropDown2)
    }

    const toggleMenu3 = () => {
        setOpenDropDown3(!openDropDown3)
    }

    return (
        <div className="fifthContainer">
            <h1>Наши преимущества</h1>
            <div className="advantagesContainer">
                <div className="adv">
                    <p onClick={toggleMenu1}>Комплексные методы лечения</p>
                    {openDropDown1 && (
                        <p>Наши менеджеры - профессионалы своего дела. Они организованы на отлично и знают свое дело.</p>
                    )}
                </div>
                <div className="adv">
                    <p onClick={toggleMenu2}>Только высококвалифицированные врачи</p>
                    {openDropDown2 && (
                    <p>Мы неоднократно занимали престижные призовые места на медицинских конкурсах, и гордимся этим.</p>
                    )}
                </div>
                <div className="adv">
                    <p onClick={toggleMenu3}>Контроль за качеством лекарств</p>
                    {openDropDown3 && (
                    <p>Мы знаем все тайные тропки тех далеких мест, где вы живете, и первыми доставим вам товар.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FifthContainer;
