/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#C03221", // ceglasty
                navy: "#001427",    // granat
                cream: "#FDFCDC",   // jasny żółtawy
                lilac: "#E88EED",   // fiolet
            },
            boxShadow: {
                soft: "0 18px 40px rgba(0,0,0,0.08)",
            },
            borderRadius: {
                "3xl": "1.75rem",
            },
        },
    },
    plugins: [],
};
