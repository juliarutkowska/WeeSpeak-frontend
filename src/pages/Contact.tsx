const Contact = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2">
            <div>
                <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
                <p className="text-sm text-slate-600 mb-2">
                    Masz pytania o grupy, poziomy lub dostępne miejsca? Napisz lub zadzwoń.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                    <li><span className="font-semibold">Telefon:</span> 123 456 789</li>
                    <li><span className="font-semibold">E-mail:</span> kontakt@weespeak.pl</li>
                    <li><span className="font-semibold">Miejsce:</span> Luzino</li>
                </ul>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border text-sm text-slate-600">
                <p className="mb-2">
                    Formularz zapisów znajdziesz w zakładce{" "}
                    <a href="/zapisy" className="text-emerald-600 underline">
                        Zapisy
                    </a>.
                </p>
                <p>
                    Możesz też napisać do nas na Facebooku WeeSpeak — chętnie doradzimy,
                    do której grupy najlepiej dołączyć.
                </p>
            </div>
        </section>
    );
};

export default Contact;
