import React, { useState } from "react";
import "./SixthContainer.css"

const Advantage = ({ title, content, onClick, isOpen }) => (
  <div className={`adv ${isOpen ? "open" : ""}`}>
    <h1 onClick={onClick}>{title}</h1>
    <p>{content}</p>
  </div>
);

const SixthContainer = () => {
  const [isOpen, setIsOpen] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleMenu = (index) => {
    setIsOpen({
      ...isOpen,
      [index]: !isOpen[index],
    });
  };

  return (
    <div className="sixthContainer">
      <div className="titleSixthContainer">
        <h1>
          Частые вопросы
        </h1>
      </div>
      <div className="advantagesContainer">
        <Advantage
          title="В чем особенность съемной каппы?"
          content="Под съемную каппу, после гигиены зубов, на ночь можно наносить укрепляющий крем toothmousse или гель rocs реминерализирующий или восстанавливающий крем от #biorepair Средства длительное время не будут смываться слюной, а значит могут напитывать ваши зубы полезными веществами достаточно продолжительное время."
          onClick={() => toggleMenu(1)}
          isOpen={isOpen[1]}
        />
        <Advantage
          title="Что делают после снятия брекетов?"
          content="Обязательным условием является фиксация несъёмного ретейнера на нижнюю и верхнюю челюсть за передними зубами, а также второй вид ретейнера — съемная каппа на ночь."
          onClick={() => toggleMenu(2)}
          isOpen={isOpen[2]}
        />
        <Advantage
          title="Для чего в лечении применяется фото проткол?"
          content="Фото протокол позволяет провести анализ лица и зубного ряда, отследить ситуацию до, в процессе лечения и после. Убедиться в полученном результате и запротоколировать все этапы лечения."
          onClick={() => toggleMenu(3)}
          isOpen={isOpen[3]}
        />
      </div>
    </div>
  );
};

export default SixthContainer;
