const Offer = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-4">Oferta kursów</h1>
            <div className="grid md:grid-cols-3 gap-5 text-sm">
                <div className="bg-white rounded-2xl p-4 shadow-sm border">
                    <h2 className="font-semibold mb-1">4–6 lat</h2>
                    <p className="text-slate-600">
                        Zajęcia pełne ruchu, piosenek i zabaw. Nauka przez doświadczenie.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border">
                    <h2 className="font-semibold mb-1">7–9 lat</h2>
                    <p className="text-slate-600">
                        Łączenie zabawy z nauką słownictwa, czytania i pierwszej gramatyki.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border">
                    <h2 className="font-semibold mb-1">Egzamin ósmoklasisty</h2>
                    <p className="text-slate-600">
                        Systematyczne przygotowanie: słownictwo, pisanie, słuchanie, mówienie.
                    </p>
                </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">
                Szczegółowy harmonogram i ceny poznasz w zakładce{" "}
                <a href="/harmonogram" className="text-emerald-600 underline">
                    Harmonogram
                </a>{" "}
                lub kontaktując się z nami.
            </p>
        </section>
    );
};

export default Offer;
