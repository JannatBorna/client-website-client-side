import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Header from './components/pages/Shared/Header/Header';
import Banner from './components/pages/Banner/Banner';
import Footer from './components/pages/Shared/Footer/Footer';
import Services from './components/pages/Services/Services';
import AboutUs from './components/pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/banner" element={<Banner />} />  
          <Route path="/aboutUs" element={<AboutUs />} /> 
          <Route path="/services" element={<Services />} /> 
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
