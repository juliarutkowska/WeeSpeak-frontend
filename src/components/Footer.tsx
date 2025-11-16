const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between items-center">
                <span>© {new Date().getFullYear()} WeeSpeak. Wszystkie prawa zastrzeżone.</span>
                <span>Luzino • język angielski dla dzieci i młodzieży</span>
            </div>
        </footer>
    );
};

export default Footer;
