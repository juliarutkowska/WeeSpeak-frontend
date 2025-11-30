const API_URL = import.meta.env.VITE_API_URL;

export async function postRegistration(data: unknown) {
    const res = await fetch(`${API_URL}/api/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Request failed");
    }

    return res.json();
}
