// ==============================
// WeeSpeak — czysty JavaScript
// ==============================

// 1) USTAW TU URL BACKENDU
// Lokalnie:
// const API_BASE_URL = "http://localhost:5097";
//
// Produkcyjnie (Azure):
// const API_BASE_URL = "https://twoj-backend.azurewebsites.net";
const API_BASE_URL = "https://localhost:7291";

// 2) Endpoint (u Ciebie: /api/registrations)
const ENDPOINT = `${API_BASE_URL}/api/registrations`;

const form = document.getElementById("signupForm");
const statusBox = document.getElementById("statusBox");
const submitBtn = document.getElementById("submitBtn");
const fillDemoBtn = document.getElementById("fillDemo");
const apiInfo = document.getElementById("apiInfo");

apiInfo.textContent = ENDPOINT;

function setStatus(type, message) {
    statusBox.className = "status"; // reset
    if (type === "ok") statusBox.classList.add("ok");
    if (type === "err") statusBox.classList.add("err");
    statusBox.textContent = message;
}

function clearStatus() {
    statusBox.className = "status";
    statusBox.textContent = "";
}

function getFormData() {
    const data = new FormData(form);

    return {
        firstName: (data.get("firstName") || "").toString().trim(),
        lastName: (data.get("lastName") || "").toString().trim(),
        parentPhoneNumber: (data.get("parentPhoneNumber") || "").toString().trim(),
        age: (data.get("age") || "").toString().trim(),
        email: (data.get("email") || "").toString().trim(),
        selectedCourse: (data.get("selectedCourse") || "").toString().trim(),
    };
}

function validate(payload) {
    // Minimalna walidacja po stronie klienta (na zaliczenie w JS fajnie wygląda)
    if (!payload.firstName || !payload.lastName) return "Uzupełnij imię i nazwisko.";
    if (!payload.parentPhoneNumber) return "Uzupełnij telefon rodzica.";
    if (!payload.age) return "Uzupełnij wiek dziecka.";
    if (!payload.email.includes("@")) return "Podaj poprawny e-mail.";
    if (!payload.selectedCourse) return "Wybierz kurs.";
    return null;
}

fillDemoBtn.addEventListener("click", () => {
    clearStatus();
    form.firstName.value = "Julia";
    form.lastName.value = "Rutkowska";
    form.parentPhoneNumber.value = "789456123";
    form.age.value = "8";
    form.email.value = "julia@example.com";
    form.selectedCourse.value = "7–9 lat";
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearStatus();

    const payload = getFormData();
    const error = validate(payload);

    if (error) {
        setStatus("err", error);
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Wysyłam...";

    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            // Spróbujmy odczytać odpowiedź, jeśli backend coś zwraca
            let txt = "";
            try {
                txt = await res.text();
            } catch (_) {}
            setStatus("err", `Błąd wysyłki (${res.status}). ${txt ? "Szczegóły: " + txt : ""}`);
            return;
        }

        setStatus("ok", "Zgłoszenie zapisano! ✅");
        form.reset();
    } catch (err) {
        console.error(err);
        setStatus("err", "Nie udało się wysłać zgłoszenia. Sprawdź, czy backend działa i czy URL jest poprawny.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Wyślij zgłoszenie";
    }
});
