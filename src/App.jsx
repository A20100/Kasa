import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/A-Propos";
import FicheLogement from "./pages/Fiche-Logement";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import axios from "axios";
import "./utils/index.scss";

export default function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="*" element={<Error />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/fiche-logement" element={<FicheLogement />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}