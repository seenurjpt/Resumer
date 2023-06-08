import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer"
import Body from "./components/resume/Body";
import Help from "./components/help/Help";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="" element={<Navigate to="/home" />} />
    <Route path="home" element={<Hero  />} />
    <Route path="resume" element={<Body  />} />
    <Route path="help" element={<Help/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
