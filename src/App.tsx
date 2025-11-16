import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/oferta" element={<Offer />} />
                    <Route path="/harmonogram" element={<Schedule />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="/zapisy" element={<Signup />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;