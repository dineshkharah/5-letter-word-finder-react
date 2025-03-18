import React, { useState } from "react";

const WordInput = ({ title, subtitle, letters, setLetters, bgColor, isGrid }) => {
    const [focusedIndex, setFocusedIndex] = useState(null);

    const handleChange = (index, value) => {
        let newLetters = [...letters];
        newLetters[index] = value.toUpperCase().slice(0, 1);

        setLetters(newLetters);

        // Move cursor to the next input in the same section
        if (value && index < letters.length - 1) {
            const nextInput = document.getElementById(`${title.replace(/\s+/g, "")}-${index + 1}`);
            if (nextInput) nextInput.focus();
        }

        // Add a new row of 5 if the last input of the row is filled (only for "Not Included")
        if (isGrid && value && (index + 1) % 5 === 0 && index === letters.length - 1) {
            newLetters = [...newLetters, "", "", "", "", ""];
            setLetters(newLetters);
        }

    };

    const handleClick = (index) => {
        if (letters[index]) {
            let newLetters = [...letters];
            newLetters[index] = ""; // Clear the value
            setLetters(newLetters);
        }
        setFocusedIndex(index);
    };

    return (
        <div className="mt-4">
            <h3 className="text-md font-semibold">{title}</h3>
            <p className="text-xs text-gray-400">{subtitle}</p>
            <div className={isGrid ? "grid grid-cols-5 gap-2 mt-2" : "flex gap-2 mt-2"}>
                {letters.map((letter, index) => (
                    <input
                        key={index}
                        id={`${title.replace(/\s+/g, "")}-${index}`}
                        type="text"
                        maxLength="1"
                        className={`w-12 h-12 text-center rounded-lg text-lg font-bold cursor-pointer caret-transparent
                            ${letter ? bgColor : "bg-gray-700"} 
                            ${focusedIndex === index ? "shadow-md shadow-blue-400 " : ""} transition-all`}
                        value={letter}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onClick={() => handleClick(index)}
                        onBlur={() => setFocusedIndex(null)}
                    />
                ))}
            </div>
        </div>
    );
};

export default WordInput;