import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import MainShopPage from './Pages/Shop/ShopPage';


const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop" element={<MainShopPage />} />
    </Routes>
  );
};


function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="App">
          <Header />
          <Layout />
        </div>
      </Router>
    </ParallaxProvider>

  );
}

export default App;
