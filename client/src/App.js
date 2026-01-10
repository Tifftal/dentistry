import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from './Components/About/about';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import Doctors from './Components/Doctors/doctors';
import Documnets from './Components/Documents/documents';
import ElenaTac from './Components/Doctor/ElenaTac';
import Fatima from './Components/Doctor/FatimaQA';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';
import Mosesova from './Components/Doctor/Mosesova';
import Navbar from './Components/Navbar/navbar';
import Portfolio from './Components/Portfolio/portfolio';
import Services from './Components/Services/services';
import Vacancy from './Components/Vacancy/vacancy';
import { useState } from 'react';

function App() {
  // console.log(process.env)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          isOpen={isModalOpen}
          onOpen={handleOpen}
          onClose={handleClose}
        />
        <Routes>
          <Route exact path="/" element={<Main onOpenModal={handleOpen} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/doctors/Kuasheva" element={<Fatima />}></Route>
          <Route path="/doctors/Tacenko" element={<ElenaTac />}></Route>
          <Route path="/doctors/Mosesova" element={<Mosesova />}></Route>
          <Route path='/vacancy' element={<Vacancy />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/documents' element={<Documnets />}></Route>
          <Route path='/admin/panel' element={<AdminPanel />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
