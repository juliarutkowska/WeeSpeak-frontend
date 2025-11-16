const Schedule = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-4">Harmonogram</h1>
            <p className="text-sm text-slate-600 mb-3">
                Przykładowy układ zajęć (godziny możesz łatwo później zaktualizować):
            </p>
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-2xl shadow-sm border">
                    <thead>
                    <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-2">Grupa</th>
                        <th className="px-4 py-2">Dzień</th>
                        <th className="px-4 py-2">Godzina</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2">4–6 lat</td>
                        <td className="px-4 py-2">Wtorek</td>
                        <td className="px-4 py-2">16:00–16:45</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">7–9 lat</td>
                        <td className="px-4 py-2">Czwartek</td>
                        <td className="px-4 py-2">17:00–18:00</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Egzamin 8-klasa</td>
                        <td className="px-4 py-2">Poniedziałek</td>
                        <td className="px-4 py-2">18:15–19:45</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
                Godziny i grupy mogą się zmieniać w zależności od liczby zapisów.
                Skontaktuj się, aby potwierdzić aktualny harmonogram.
            </p>
        </section>
    );
};

export default Schedule;
