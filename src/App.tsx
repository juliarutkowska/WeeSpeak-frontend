import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col bg-cream text-navy">
            <Navbar />

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </main>

            <footer className="border-t border-navy/10 bg-white/80">
                <div className="container py-5 text-xs md:text-sm text-navy/70 flex flex-col md:flex-row items-center justify-between gap-2">
                    <span>© 2025 WeeSpeak. Wszystkie prawa zastrzeżone.</span>
                    <span>Luzino • język angielski dla dzieci i młodzieży</span>
                </div>
            </footer>
        </div>
    );
};

export default App;
