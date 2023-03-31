import Main from './Components/Main/main';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About/about';
import Services from './Components/Services/services';
import Price from './Components/Price/price';
import Doctors from './Components/Doctors/doctors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/price" element={<Price />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
