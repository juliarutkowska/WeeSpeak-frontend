import { Link } from "react-router-dom";

const Offer = () => {
    const groups = [
        {
            title: "4–6 lat",
            subtitle: "Pierwsze kroki w angielskim",
            points: [
                "nauka przez zabawę i ruch",
                "piosenki, gry, historyjki",
                "oswajanie języka bez stresu",
                "małe, przyjazne grupy",
            ],
        },
        {
            title: "7–9 lat",
            subtitle: "Rozwijanie mówienia i słownictwa",
            points: [
                "dużo mówienia na lekcji",
                "gry językowe i projekty",
                "czytanie i krótkie dialogi",
                "system regularnych powtórek",
            ],
        },
        {
            title: "Egzamin ósmoklasisty",
            subtitle: "Systematyczne przygotowanie",
            points: [
                "praca na arkuszach egzaminacyjnych",
                "ćwiczenie słuchania i czytania",
                "pisanie wypowiedzi wymaganych na egzaminie",
                "strategia rozwiązywania zadań",
            ],
        },
    ];

    return (
        <section className="container py-10 space-y-10">
            {/* Header */}
            <div className="rounded-card bg-white border border-navy/15 shadow-soft p-8 md:p-10 text-center">
                <h1 className="text-4xl font-extrabold mb-3">
                    Offer
                </h1>
                <p className="text-navy/70 text-lg max-w-3xl mx-auto">
                    Uczymy w małych grupach, w spokojnej atmosferze i z naciskiem na praktyczne użycie języka.
                    Program dobieramy do wieku i potrzeb dzieci.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {groups.map((g) => (
                    <div
                        key={g.title}
                        className="rounded-card bg-white border border-navy/15 shadow-soft p-6 flex flex-col"
                    >
                        <div className="mb-3">
                            <h2 className="text-2xl font-bold text-primary">{g.title}</h2>
                            <p className="text-navy/70">{g.subtitle}</p>
                        </div>

                        <ul className="list-disc ml-6 space-y-2 text-navy/80 flex-1">
                            {g.points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>

                        <Link
                            to="/signup"
                            className="mt-6 inline-block text-center px-4 py-2 rounded-full bg-navy text-cream font-semibold hover:bg-navy/90 transition"
                        >
                            Sign up
                        </Link>
                    </div>
                ))}
            </div>

            {/* Info section */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-card bg-cream border border-navy/15 shadow-soft p-6">
                    <h3 className="text-xl font-bold mb-2 text-navy">
                        How do classes look?
                    </h3>
                    <p className="text-navy/80 leading-relaxed">
                        Stawiamy na aktywność, mówienie i pozytywną atmosferę. Dzieci uczą się
                        naturalnie — przez ruch, gry, scenki i projekty. Regularne powtórki
                        pomagają utrwalić materiał bez wkuwania.
                    </p>
                </div>

                <div className="rounded-card bg-violet/20 border border-violet shadow-soft p-6">
                    <h3 className="text-xl font-bold mb-2 text-navy">
                        Location & schedule
                    </h3>
                    <p className="text-navy/80 leading-relaxed">
                        Zajęcia odbywają się w Luzinie. Aktualne godziny znajdziesz w{" "}
                        <Link to="/schedule" className="text-primary underline font-semibold">
                            schedule
                        </Link>
                        .
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="rounded-card bg-white border border-navy/15 shadow-soft p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">
                    Questions?
                </h3>
                <p className="text-navy/70 mb-4">
                    Chętnie pomożemy dobrać odpowiednią grupę.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/contact"
                        className="px-6 py-3 rounded-full border-2 border-primary text-primary bg-white font-semibold hover:bg-primary/10 transition"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/signup"
                        className="px-6 py-3 rounded-full bg-primary text-cream font-semibold hover:bg-primary/80 transition"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Offer;
