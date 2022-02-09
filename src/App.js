import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Header from './components/pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Header></Header>
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
            
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
