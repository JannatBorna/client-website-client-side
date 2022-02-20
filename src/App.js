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
import AboutUs from './components/pages/AboutUs/AboutUs';
import Package from './components/pages/Package/Package';
import AirTickets from './components/pages/AirTickets/AirTickets';

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
          <Route path="/package" element={<Package />} /> 
          <Route path="/airTickets" element={<AirTickets />} /> 
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
