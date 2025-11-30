const Schedule = () => {
    const schedule = [
        {
            group: "4–6 lat",
            days: [
                { day: "Poniedziałek", time: "16:00 – 16:45" },
                { day: "Środa", time: "16:00 – 16:45" },
            ],
        },
        {
            group: "7–9 lat",
            days: [
                { day: "Wtorek", time: "17:00 – 17:50" },
                { day: "Czwartek", time: "17:00 – 17:50" },
            ],
        },
        {
            group: "Egzamin ósmoklasisty",
            days: [
                { day: "Poniedziałek", time: "18:00 – 19:00" },
                { day: "Środa", time: "18:00 – 19:00" },
            ],
        },
    ];

    return (
        <section className="container py-10 space-y-10">
            {/* Header */}
            <div className="rounded-card bg-white border border-navy/15 shadow-soft p-8 md:p-10 text-center">
                <h1 className="text-4xl font-extrabold mb-3">
                    Schedule
                </h1>
                <p className="text-navy/70 text-lg max-w-3xl mx-auto">
                    Aktualne godziny zajęć. Jeśli termin Ci nie pasuje — zapisz się, a postaramy się znaleźć alternatywę.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {schedule.map((s) => (
                    <div
                        key={s.group}
                        className="rounded-card bg-white border border-navy/15 shadow-soft p-6"
                    >
                        <h2 className="text-2xl font-bold text-primary mb-4">{s.group}</h2>

                        <div className="space-y-3">
                            {s.days.map((d) => (
                                <div
                                    key={d.day}
                                    className="flex items-center justify-between rounded-xl bg-cream border border-navy/10 px-4 py-3"
                                >
                                    <span className="font-semibold text-navy">{d.day}</span>
                                    <span className="text-navy/80">{d.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Note */}
            <div className="rounded-card bg-violet/20 border border-violet shadow-soft p-6 text-center">
                <p className="text-navy/80">
                    Harmonogram może się zmieniać. Najlepiej zostawić zgłoszenie — oddzwonimy z potwierdzeniem.
                </p>
            </div>
        </section>
    );
};

export default Schedule;
