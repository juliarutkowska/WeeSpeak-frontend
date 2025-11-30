const Contact = () => {
    return (
        <section className="container py-10 space-y-10">
            {/* Header */}
            <div className="rounded-card bg-white border border-navy/15 shadow-soft p-8 md:p-10 text-center">
                <h1 className="text-4xl font-extrabold mb-3">
                    Contact
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
                            <a href="tel:+48000000000" className="text-primary underline">
                                +48 000 000 000
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-navy">E-mail:</span>{" "}
                            <a href="mailto:weespeak@example.com" className="text-primary underline">
                                weespeak@example.com
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
                        Contact hours
                    </h2>

                    <div className="space-y-2 text-navy/80">
                        <p><span className="font-semibold text-navy">Mon–Fri:</span> 12:00 – 18:00</p>
                        <p><span className="font-semibold text-navy">Sat:</span> 10:00 – 13:00</p>
                        <p><span className="font-semibold text-navy">Sun:</span> closed</p>
                    </div>

                    <div className="text-sm text-navy/70">
                        Jeśli nie odbierzemy — oddzwonimy 😊
                    </div>
                </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-card bg-white border border-navy/15 shadow-soft p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-navy/70 mb-4">
                    Tutaj można później wkleić mapę Google.
                </p>

                <div className="rounded-xl bg-cream border border-navy/10 p-10 text-navy/60">
                    [ Google Maps placeholder ]
                </div>
            </div>
        </section>
    );
};

export default Contact;
