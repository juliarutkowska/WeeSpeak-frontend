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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const API_URL = import.meta.env.VITE_API_URL;

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
                alert("Wystąpił błąd podczas wysyłania.");
            }
        } catch (err) {
            console.error(err);
            alert("Nie udało się wysłać zgłoszenia.");
        }
    };

    return (
        <section className="container py-10">
            <div className="max-w-2xl mx-auto rounded-card bg-white border border-navy/15 shadow-soft p-8 md:p-10">
                <h1 className="text-3xl font-extrabold text-center mb-2">
                    Zapisy na zajęcia
                </h1>

                <p className="text-center text-navy/70 mb-6">
                    Wypełnij formularz — odezwiemy się w sprawie grupy i terminu.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="firstName"
                        placeholder="Imię"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />

                    <input
                        name="lastName"
                        placeholder="Nazwisko"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />

                    <input
                        name="parentPhoneNumber"
                        placeholder="Telefon kontaktowy"
                        value={formData.parentPhoneNumber}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />

                    <input
                        name="age"
                        placeholder="Wiek dziecka"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />

                    <input
                        name="email"
                        placeholder="Adres e-mail"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />

                    <select
                        name="selectedCourse"
                        value={formData.selectedCourse}
                        onChange={handleChange}
                        required
                        className="input-field"
                    >
                        <option value="">Wybierz kurs</option>
                        <option value="4–6 lat">4–6 lat</option>
                        <option value="7–9 lat">7–9 lat</option>
                        <option value="Egzamin ósmoklasisty">Egzamin ósmoklasisty</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-primary text-cream font-semibold text-lg hover:bg-primary/80 transition"
                    >
                        Wyślij zgłoszenie
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Signup;
