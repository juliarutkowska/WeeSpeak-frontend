import { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    parentPhoneNumber: string;
    age: string;
    email: string;
    selectedCourse: string;
}

const Signup = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        parentPhoneNumber: "",
        age: "",
        email: "",
        selectedCourse: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const API_URL = import.meta.env.VITE_API_URL as string | undefined;
        if (!API_URL) {
            alert("Brak VITE_API_URL w .env");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/registrations`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Zgłoszenie zostało wysłane!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    parentPhoneNumber: "",
                    age: "",
                    email: "",
                    selectedCourse: "",
                });
            } else {
                const text = await response.text();
                console.error("Niepowodzenie:", response.status, text);
                alert("Wystąpił błąd podczas wysyłania.");
            }
        } catch (error) {
            console.error("Błąd:", error);
            alert("Nie udało się wysłać zgłoszenia.");
        }
    };

    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <div className="max-w-2xl mx-auto text-center mb-6 space-y-2">
                <h1 className="text-2xl font-bold">
                    Zapisz dziecko na zajęcia w WeeSpeak
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Wypełnij krótki formularz. Odezwiemy się, aby dobrać odpowiednią
                    grupę i potwierdzić szczegóły.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border p-6 grid gap-4"
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                            Imię dziecka
                        </label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                            Nazwisko dziecka
                        </label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                            Wiek dziecka
                        </label>
                        <input
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                            Telefon rodzica
                        </label>
                        <input
                            name="parentPhoneNumber"
                            value={formData.parentPhoneNumber}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Adres e-mail
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Wybierz kurs
                    </label>
                    <select
                        name="selectedCourse"
                        value={formData.selectedCourse}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                        <option value="">Wybierz kurs</option>
                        <option value="4–6 lat">Grupa 4–6 lat</option>
                        <option value="7–9 lat">Grupa 7–9 lat</option>
                        <option value="Egzamin ósmoklasisty">
                            Przygotowanie do egzaminu ósmoklasisty
                        </option>
                    </select>
                </div>

                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        className="px-7 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
                    >
                        Wyślij zgłoszenie
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Signup;
