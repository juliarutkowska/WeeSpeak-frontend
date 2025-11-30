import { NavLink } from "react-router-dom";

const navItems = [
    { label: "Strona główna", to: "/" },
    { label: "Oferta", to: "/offer" },
    { label: "Harmonogram", to: "/schedule" },
    { label: "Kontakt", to: "/contact" },
    { label: "Zapisy", to: "/signup" },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-navy/10">
            <nav className="container flex items-center justify-between py-3 md:py-4 gap-4">
                {/* Logo / nazwa */}
                <NavLink to="/" className="flex items-center gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary text-cream grid place-items-center font-extrabold text-lg">
                        W
                    </div>
                    <div className="leading-tight">
                        <div className="font-extrabold text-base md:text-lg tracking-tight">
                            WeeSpeak
                        </div>
                        <div className="text-[11px] md:text-xs text-navy/70 uppercase tracking-[0.12em]">
                            szkoła języka angielskiego
                        </div>
                    </div>
                </NavLink>

                {/* Linki */}
                <ul className="hidden sm:flex gap-2 md:gap-3 text-sm md:text-base">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                end
                                className={({ isActive }) =>
                                    [
                                        "px-3 py-2 rounded-full font-semibold transition whitespace-nowrap",
                                        isActive
                                            ? "bg-primary text-cream shadow-soft"
                                            : "text-navy/80 hover:bg-cream hover:text-navy",
                                    ].join(" ")
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Przycisk Zapisy na mobile */}
                <NavLink
                    to="/signup"
                    className="sm:hidden px-3 py-2 rounded-full bg-primary text-cream text-sm font-semibold shadow-soft"
                >
                    Zapisy
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
