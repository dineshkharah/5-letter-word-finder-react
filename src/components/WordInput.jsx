import React from "react";

const WordInput = ({ title, subtitle, letters, setLetters, bgColor, isGrid }) => {

    const handleChange = (index, value) => {
        let newLetters = [...letters];
        newLetters[index] = value.toUpperCase();

        // Add a new row of 5 if the last input of the row is filled (only for "Not Included")
        if (isGrid && value && (index + 1) % 5 === 0 && index === letters.length - 1) {
            newLetters = [...newLetters, "", "", "", "", ""];
        }

        setLetters(newLetters);
    };

    return (
        <div className="mt-4">
            <h3 className="text-md font-semibold">{title}</h3>
            <p className="text-xs text-gray-400">{subtitle}</p>
            <div className={isGrid ? "grid grid-cols-5 gap-2 mt-2" : "flex gap-2 mt-2"}>
                {letters.map((letter, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className={`w-12 h-12 text-center rounded-lg text-lg font-bold ${letter ? bgColor : "bg-gray-700"
                            }`}
                        value={letter}
                        onChange={(e) => handleChange(index, e.target.value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default WordInput;
