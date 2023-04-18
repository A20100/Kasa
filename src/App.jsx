import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/A-Propos";
import FicheLogement from "./pages/Fiche-Logement";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
    }
    body {
        margin: 0;
      }
`



export default function App() {
    return (
        <div className="App">
            <GlobalStyle />
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