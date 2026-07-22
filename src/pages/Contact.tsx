const Contact = () => {
    return (
        <section className="container py-10 space-y-10">
            {/* Header */}
            <div className="rounded-card bg-white border border-navy/15 shadow-soft p-8 md:p-10 text-center">
                <h1 className="text-4xl font-extrabold mb-3">
                    Kontakt
                </h1>
                <p className="text-navy/70 text-lg max-w-3xl mx-auto">
                    Masz pytania o poziom, grupę albo terminy? Napisz lub zadzwoń — chętnie pomożemy.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Contact info */}
                <div className="rounded-card bg-white border border-navy/15 shadow-soft p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-primary">
                        WeeSpeak – Luzino
                    </h2>

                    <div className="space-y-2 text-navy/80">
                        <p>
                            <span className="font-semibold text-navy">Telefon:</span>{" "}
                            <a href="tel:+48663131803" className="text-primary underline">
                                +48 663 131 803
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-navy">E-mail:</span>{" "}
                            <a href="mailto:weespeak123@gmail.com" className="text-primary underline">
                                weespeak123@gmail.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-navy">Miejscowość:</span>{" "}
                            Luzino
                        </p>
                    </div>

                    <div className="rounded-xl bg-cream border border-navy/10 p-4 text-sm text-navy/80">
                        Możesz też wypełnić formularz zapisów — oddzwonimy.
                    </div>
                </div>

                {/* Hours */}
                <div className="rounded-card bg-cream border border-navy/15 shadow-soft p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-violet">
                        Godziny otwarcia
                    </h2>

                    <div className="space-y-2 text-navy/80">
                        <p><span className="font-semibold text-navy">Pon-Pt:</span> 8:00 – 18:00</p>
                        <p><span className="font-semibold text-navy">Sob:</span> zamknięte</p>
                        <p><span className="font-semibold text-navy">Nd:</span> zamknięte</p>
                    </div>

                    <div className="text-sm text-navy/70">
                        Jeśli nie odbierzemy — oddzwonimy 😊
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="rounded-card bg-white border border-navy/15 shadow-soft p-6">
                <h3 className="text-xl font-bold mb-2 text-center">Lokalizacja</h3>
                <p className="text-navy/70 mb-4 text-center">
                    Tutaj jesteśmy
                </p>

                <div className="rounded-xl overflow-hidden border border-navy/10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.215935192843!2d18.098562590349427!3d54.56494590219367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdbf30e0b9d6a7%3A0x6554536edf45cad3!2sOfiar%20Stutthofu%2018%2C%2084-242%20Luzino!5e0!3m2!1spl!2spl!4v1784701675904!5m2!1spl!2spl"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokalizacja WeeSpeak w Luzinie"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
