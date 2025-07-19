import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup.tsx"; // lub Signup, jeśli tak nazwiesz

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/oferta">Oferta</Link></li>
                    <li><Link to="/harmonogram">Harmonogram</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                    <li><Link to="/zapisy">Zapisy</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/oferta" element={<Offer />} />
                <Route path="/harmonogram" element={<Schedule />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/zapisy" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
