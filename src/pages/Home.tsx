const Home = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-center">
                <div className="text-center md:text-left space-y-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Przyjazna nauka angielskiego w WeeSpeak
                    </h1>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Małe grupy, dużo mówienia, gry, ruch i dopasowany program dla
                        dzieci i młodzieży. Bez stresu, z uśmiechem i skutecznie.
                    </p>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Zapraszamy dzieci od 4 roku życia, uczniów szkół podstawowych oraz
                        przygotowujemy do egzaminu ósmoklasisty.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                        <a
                            href="/zapisy"
                            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
                        >
                            Zapisz dziecko na zajęcia
                        </a>
                        <a
                            href="/oferta"
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                        >
                            Zobacz ofertę
                        </a>
                    </div>
                </div>

                <div className="bg-white/80 rounded-3xl p-5 shadow-sm border text-sm text-slate-700 space-y-2">
                    <h2 className="font-bold text-emerald-600">
                        Dlaczego rodzice wybierają WeeSpeak?
                    </h2>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>kameralne grupy i indywidualne podejście,</li>
                        <li>nauka przez zabawę, ruch i projekty,</li>
                        <li>dużo mówienia zamiast wkuwania,</li>
                        <li>profesjonalne przygotowanie do egzaminu,</li>
                        <li>bezpieczna, ciepła atmosfera.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home;
