import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';


const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
};


function App() {
  return (
    <Router>
       <div className="App">
        <Header/>
       <Layout />
    </div>
    </Router>
  );
}

export default App;
