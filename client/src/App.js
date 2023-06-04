import Main from './Components/Main/main';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About/about';
import Services from './Components/Services/services';
import Doctors from './Components/Doctors/doctors';
import Vacancy from './Components/Vacancy/vacancy'
import Portfolio from './Components/Portfolio/portfolio'
import Documnets from './Components/Documents/documents'
import AdminPanel from './Components/AdminPanel/AdminPanel';
import Fatima from './Components/Doctor/FatimaQA';
import Smyk from './Components/Doctor/Smyk';
import ElenaTac from './Components/Doctor/ElenaTac';
import Eremeeva from './Components/Doctor/Eremeeva';


function App() {
  // console.log(process.env)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/doctors/Kuasheva" element={<Fatima />}></Route>
          <Route path="/doctors/Smyk" element={<Smyk />}></Route>
          <Route path="/doctors/Tacenko" element={<ElenaTac />}></Route>
          <Route path="/doctors/Eremeeva" element={<Eremeeva />}></Route>
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
