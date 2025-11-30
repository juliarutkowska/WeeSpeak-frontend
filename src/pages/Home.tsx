import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="space-y-16 md:space-y-20 pb-12 md:pb-16">
            {/* HERO */}
            <section className="section pt-10 md:pt-16">
                <div className="grid gap-10 md:grid-cols-2 items-center">
                    {/* Tekst */}
                    <div className="space-y-6">
            <span className="pill bg-lilac/15 text-primary border border-lilac/40">
              Luzino • angielski dla dzieci i młodzieży
            </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Przyjazna nauka angielskiego{" "}
                            <span className="text-primary">w WeeSpeak</span>
                        </h1>

                        <p className="text-base md:text-lg text-navy/80 max-w-xl">
                            Małe grupy, dużo mówienia, gry, ruch i dopasowany program dla
                            dzieci i nastolatków. Bez stresu, z uśmiechem i realnymi efektami.
                        </p>

                        <p className="text-sm md:text-base text-navy/70 max-w-xl">
                            Zapraszamy dzieci od 4 roku życia, uczniów szkół podstawowych i
                            młodzież przygotowującą się m.in. do egzaminu ósmoklasisty.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                to="/signup"
                                className="px-6 py-3 rounded-full bg-primary text-cream font-semibold shadow-soft hover:brightness-110 transition"
                            >
                                Zapisz dziecko na zajęcia
                            </Link>
                            <Link
                                to="/offer"
                                className="px-6 py-3 rounded-full border border-navy/15 bg-white/70 text-navy font-semibold hover:bg-cream transition"
                            >
                                Zobacz ofertę
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2 text-xs md:text-sm text-navy/70">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Kameralne grupy i indywidualne podejście
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-lilac" />
                                Przyjazna atmosfera, dużo mówienia
                            </div>
                        </div>
                    </div>

                    {/* „Ilustracja” / karta */}
                    <div className="relative">
                        <div className="card relative overflow-hidden bg-gradient-to-br from-lilac/40 via-cream to-primary/10">
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-lilac/30 blur-3xl" />
                            <div className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />

                            <div className="relative p-7 md:p-8 space-y-6">
                                <p className="text-xs uppercase tracking-[0.18em] text-navy/70">
                                    WeeSpeak • Luzino
                                </p>
                                <h2 className="text-xl md:text-2xl font-bold">
                                    Zajęcia pełne ruchu, rymów i zabawy
                                </h2>
                                <p className="text-sm text-navy/80">
                                    Dzieci mówią po angielsku od pierwszych zajęć. Łączymy
                                    gry, projekty, piosenki i pracę w małych grupach. Dzięki temu
                                    uczniowie oswajają się z językiem w naturalny sposób.
                                </p>

                                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                                    <div className="bg-white/70 rounded-2xl py-3">
                                        <div className="font-extrabold text-lg">4–6</div>
                                        <div className="text-navy/70">przedszkolaki</div>
                                    </div>
                                    <div className="bg-white/70 rounded-2xl py-3">
                                        <div className="font-extrabold text-lg">7–12</div>
                                        <div className="text-navy/70">szkoła podstawowa</div>
                                    </div>
                                    <div className="bg-white/70 rounded-2xl py-3">
                                        <div className="font-extrabold text-lg">13+</div>
                                        <div className="text-navy/70">egz. ósmokl.</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-2">
                                    <div className="w-10 h-10 rounded-full bg-primary text-cream grid place-items-center text-lg font-bold">
                                        🙂
                                    </div>
                                    <p className="text-xs md:text-sm text-navy/80">
                                        „Na takie zajęcia chce się wracać!” – to najczęstsza
                                        opinia rodziców naszych uczniów.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dlaczego rodzice wybierają WeeSpeak */}
            <section className="section bg-white/60 rounded-3xl md:rounded-[2.5rem] shadow-soft">
                <div className="space-y-8">
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Dlaczego rodzice wybierają WeeSpeak?
                        </h2>
                        <p className="text-sm md:text-base text-navy/70 max-w-2xl mx-auto">
                            Łączymy skuteczną naukę z dobrą atmosferą. Dzieci wychodzą z
                            zajęć uśmiechnięte, a jednocześnie robią realne postępy w
                            mówieniu i rozumieniu po angielsku.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 text-sm">
                        <div className="card p-5 space-y-2">
                            <div className="pill bg-primary/10 text-primary border border-primary/20">
                                🎈 Atmosfera
                            </div>
                            <h3 className="font-semibold">Bezpieczne, kameralne grupy</h3>
                            <p className="text-xs text-navy/75">
                                Dzieci uczą się w małych grupach, dzięki czemu każdy ma czas na
                                wypowiedź i pytania.
                            </p>
                        </div>

                        <div className="card p-5 space-y-2">
                            <div className="pill bg-lilac/10 text-lilac border border-lilac/30">
                                🎲 Zabawa
                            </div>
                            <h3 className="font-semibold">Nauka przez ruch i gry</h3>
                            <p className="text-xs text-navy/75">
                                Wykorzystujemy gry, projekty, rymowanki i piosenki – dzieci
                                angażują się całym sobą.
                            </p>
                        </div>

                        <div className="card p-5 space-y-2">
                            <div className="pill bg-primary/10 text-primary border border-primary/20">
                                💬 Mówienie
                            </div>
                            <h3 className="font-semibold">Dużo mówienia zamiast kucia</h3>
                            <p className="text-xs text-navy/75">
                                Od pierwszych zajęć zachęcamy do swobodnego mówienia – bez
                                strachu przed błędami.
                            </p>
                        </div>

                        <div className="card p-5 space-y-2">
                            <div className="pill bg-lilac/10 text-lilac border border-lilac/30">
                                🎓 Efekty
                            </div>
                            <h3 className="font-semibold">Przygotowanie do egzaminów</h3>
                            <p className="text-xs text-navy/75">
                                Uczymy tak, aby dzieci były gotowe na egzaminy szkolne, a przy
                                tym pewne siebie w codziennej komunikacji.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grupy wiekowe */}
            <section className="section">
                <div className="space-y-8">
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Kursy dopasowane do wieku
                        </h2>
                        <p className="text-sm md:text-base text-navy/70 max-w-2xl mx-auto">
                            Inne potrzeby mają przedszkolaki, inne ósmoklasiści. Dlatego
                            dzielimy kursy na grupy wiekowe i dobieramy metody do etapu
                            rozwoju dziecka.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div className="card p-6 border-t-4 border-lilac">
                            <p className="text-xs uppercase tracking-[0.18em] text-navy/60 mb-1">
                                4–6 lat
                            </p>
                            <h3 className="font-semibold mb-2">Przedszkolaki</h3>
                            <p className="text-xs text-navy/75 mb-3">
                                Dużo ruchu, piosenek i rymowanek. Otwieramy najmłodszych na
                                brzmienie języka i pierwsze proste zwroty.
                            </p>
                            <p className="text-xs font-semibold text-primary">
                                Cel: pozytywne skojarzenia z angielskim i odwaga do mówienia.
                            </p>
                        </div>

                        <div className="card p-6 border-t-4 border-primary">
                            <p className="text-xs uppercase tracking-[0.18em] text-navy/60 mb-1">
                                7–12 lat
                            </p>
                            <h3 className="font-semibold mb-2">Szkoła podstawowa</h3>
                            <p className="text-xs text-navy/75 mb-3">
                                Rozwijamy słownictwo, rozumienie ze słuchu i czytanie. Uczymy
                                swobodnych wypowiedzi i przygotowujemy do egzaminów.
                            </p>
                            <p className="text-xs font-semibold text-primary">
                                Cel: swobodne mówienie i solidne podstawy gramatyczne.
                            </p>
                        </div>

                        <div className="card p-6 border-t-4 border-navy">
                            <p className="text-xs uppercase tracking-[0.18em] text-navy/60 mb-1">
                                13+ lat
                            </p>
                            <h3 className="font-semibold mb-2">Nastolatki</h3>
                            <p className="text-xs text-navy/75 mb-3">
                                Pracujemy na tematach bliskich nastolatkom, rozwijamy płynność
                                wypowiedzi i przygotowujemy do egzaminu ósmoklasisty.
                            </p>
                            <p className="text-xs font-semibold text-primary">
                                Cel: pewność siebie przed egzaminami i w prawdziwych
                                sytuacjach.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-2">
                        <Link
                            to="/signup"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-cream font-semibold shadow-soft hover:brightness-110 transition"
                        >
                            Zapisz dziecko na zajęcia
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
