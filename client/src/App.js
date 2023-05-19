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
import Doctor from './Components/Doctor/Doctor';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import AdminCallBack from './Components/AdminPanel/CallBack/AdminCallBack';
import AdminComment from './Components/AdminPanel/Comment/AdminComment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path='/doctors/doctor/*' element={<Doctor />}></Route>
          <Route path='/vacancy' element={<Vacancy />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/documents' element={<Documnets />}></Route>
          <Route path='/admin/panel' element={<AdminPanel />}></Route>
          <Route path='/admin/panel/callback' element={<AdminCallBack />}></Route>
          <Route path='/admin/panel/comment' element={<AdminComment />}></Route>
          {/* <Route path='/admin/panel/teeth/images'></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
