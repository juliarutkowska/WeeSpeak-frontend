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
            const response = await fetch("http://localhost:5000/api/registrations", {
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
        } catch (error) {
            console.error("Błąd:", error);
            alert("Nie udało się wysłać zgłoszenia.");
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
            <h2>Zapisz się na kurs języka angielskiego</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="firstName"
                    placeholder="Imię"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    name="lastName"
                    placeholder="Nazwisko"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    name="parentPhoneNumber"
                    placeholder="Telefon rodzica"
                    value={formData.parentPhoneNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    name="age"
                    placeholder="Wiek dziecka"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    placeholder="Adres e-mail"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <select
                    name="selectedCourse"
                    value={formData.selectedCourse}
                    onChange={handleChange}
                    required
                >
                    <option value="">Wybierz kurs</option>
                    <option value="4–6 lat">4–6 lat</option>
                    <option value="7–9 lat">7–9 lat</option>
                    <option value="Egzamin ósmoklasisty">Egzamin ósmoklasisty</option>
                </select>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
};

export default Signup;
