const WordInput = ({ title, subtitle, letters, setLetters, bgColor, isGrid = false }) => {
    return (
        <div className="mt-4">
            <h3 className="text-md font-semibold">{title}</h3>
            <p className="text-xs text-gray-400">{subtitle}</p>
            <div className={`${isGrid ? "grid grid-cols-5" : "flex"} gap-2 mt-2`}>
                {letters.map((letter, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className={`w-12 h-12 text-center rounded-lg text-lg font-bold ${letter ? bgColor || "bg-gray-700" : "bg-gray-700"
                            }`}
                        value={letter}
                        onChange={(e) => {
                            const newLetters = [...letters];
                            newLetters[index] = e.target.value.toUpperCase();
                            setLetters(newLetters);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default WordInput;
