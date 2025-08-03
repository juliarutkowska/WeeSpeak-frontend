const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 text-center">
                Witaj w WeeSpeak! 🗣️
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-xl mb-6">
                Oferujemy radosne, angażujące i skuteczne zajęcia z języka angielskiego dla dzieci.
                Dołącz do nas i zobacz, jak Twoje dziecko rozwija się językowo!
            </p>
            <div className="flex gap-4">
                <a
                    href="/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
                >
                    Zapisz dziecko
                </a>
                <a
                    href="/offer"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded transition"
                >
                    Zobacz ofertę
                </a>
            </div>
        </div>
    );
};

export default Home;
