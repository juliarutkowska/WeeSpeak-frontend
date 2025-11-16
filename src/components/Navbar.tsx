import { NavLink } from "react-router-dom";

const baseLink =
    "px-3 py-2 text-sm font-medium transition-colors hover:text-emerald-500";
const activeLink = "text-emerald-600";

const Navbar = () => {
    return (
        <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-20">
            <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
          <span className="text-2xl font-extrabold text-emerald-500 leading-none">
            WeeSpeak
          </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wide">
            szkoła języka angielskiego
          </span>
                </div>

                <nav className="flex flex-wrap justify-center gap-1.5">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Strona główna
                    </NavLink>
                    <NavLink
                        to="/oferta"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Oferta
                    </NavLink>
                    <NavLink
                        to="/harmonogram"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Harmonogram
                    </NavLink>
                    <NavLink
                        to="/kontakt"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Kontakt
                    </NavLink>
                    <NavLink
                        to="/zapisy"
                        className={({ isActive }) =>
                            `${baseLink} rounded-full border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white ${
                                isActive ? "bg-emerald-500 text-white" : ""
                            }`
                        }
                    >
                        Zapisy
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
