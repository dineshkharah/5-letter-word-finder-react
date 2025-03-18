import { useState } from "react";

// Hardcoded dataset for testing
const wordDataset = {
    words: [
        "aback", "abaft", "abase", "abate", "abbey",
        "abbot", "abhor", "abide", "abler", "abode",
        "about", "above", "abuse"
    ]
};

const WordFinder = () => {
    const [knownLetters, setKnownLetters] = useState(["", "", "", "", ""]);
    const [unknownLetters, setUnknownLetters] = useState(["", "", "", "", ""]);
    const [notIncluded, setNotIncluded] = useState(["", "", "", "", ""]);
    const [filteredWords, setFilteredWords] = useState([]);

    // Function to filter words based on user input
    const findWords = () => {
        let possibleWords = wordDataset.words;

        console.log("Initial word list:", possibleWords);

        // 1. Apply known positions filter (order-sensitive)
        possibleWords = possibleWords.filter(word =>
            knownLetters.every((char, idx) => !char || word[idx].toUpperCase() === char)
        );

        console.log("Filtered words after known positions:", possibleWords);

        // 2. Apply unknown positions filter (letters must be included but can be anywhere)
        const unknownSet = new Set(unknownLetters.filter(c => c));
        if (unknownSet.size > 0) {
            possibleWords = possibleWords.filter(word =>
                [...unknownSet].every(char => word.toUpperCase().includes(char))
            );
        }

        console.log("Filtered words after unknown letters:", possibleWords);

        // 3. Apply not included letters filter (must be excluded)
        const notIncludedSet = new Set(notIncluded.filter(c => c));
        if (notIncludedSet.size > 0) {
            possibleWords = possibleWords.filter(word =>
                [...notIncludedSet].every(char => !word.toUpperCase().includes(char))
            );
        }

        console.log("Filtered words after not included letters:", possibleWords);

        setFilteredWords(possibleWords);
    };




    // Handle Not Included Letter Input with Dynamic Rows of 5
    const handleNotIncludedChange = (index, value) => {
        let newNotIncluded = [...notIncluded];
        newNotIncluded[index] = value.toUpperCase();

        // Add a new row of 5 if the last input of the row is filled
        if (value && (index + 1) % 5 === 0 && index === notIncluded.length - 1) {
            newNotIncluded = [...newNotIncluded, "", "", "", "", ""];
        }

        setNotIncluded(newNotIncluded);
    };

    return (
        <div className="bg-gray-900 p-6 rounded-lg text-white w-96 mx-auto shadow-lg">
            <h2 className="text-lg font-bold">Word Finder & Unscrambler</h2>
            <p className="text-sm text-gray-400">Default</p>

            {/* Known Positions */}
            <div className="mt-4">
                <h3 className="text-md font-semibold">Known positions</h3>
                <p className="text-xs text-gray-400">Letters: Order sensitive</p>
                <div className="flex gap-2 mt-2">
                    {knownLetters.map((letter, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className={`w-12 h-12 text-center rounded-lg text-lg font-bold ${letter ? 'bg-green-500' : 'bg-gray-700'}`}
                            value={letter}
                            onChange={(e) => {
                                const newLetters = [...knownLetters];
                                newLetters[index] = e.target.value.toUpperCase();
                                setKnownLetters(newLetters);
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Unknown Positions */}
            <div className="mt-4">
                <h3 className="text-md font-semibold">Unknown positions</h3>
                <p className="text-xs text-gray-400">Letters: Not order sensitive</p>
                <div className="flex gap-2 mt-2">
                    {unknownLetters.map((letter, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className={`w-12 h-12 text-center rounded-lg text-lg font-bold ${letter ? 'bg-yellow-500' : 'bg-gray-700'}`}
                            value={letter}
                            onChange={(e) => {
                                const newLetters = [...unknownLetters];
                                newLetters[index] = e.target.value.toUpperCase();
                                setUnknownLetters(newLetters);
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Not Included Letters */}
            <div className="mt-4">
                <h3 className="text-md font-semibold">Not included</h3>
                <p className="text-xs text-gray-400">Letters: Not order sensitive</p>
                <div className="grid grid-cols-5 gap-2 mt-2">
                    {notIncluded.map((letter, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-center rounded-lg bg-gray-700 text-lg font-bold"
                            value={letter}
                            onChange={(e) => handleNotIncludedChange(index, e.target.value)}
                        />
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-gray-700 py-2 rounded" onClick={() => {
                    setKnownLetters(["", "", "", "", ""]);
                    setUnknownLetters(["", "", "", "", ""]);
                    setNotIncluded(["", "", "", "", ""]);
                    setFilteredWords([]);
                }}>Reset</button>
                <button className="flex-1 bg-blue-500 py-2 rounded" onClick={findWords}>Find words</button>
            </div>

            {/* Display Dataset for Testing */}
            <div className="mt-4 p-2 bg-gray-800 rounded text-xs max-h-40 overflow-y-auto">
                <h3 className="text-sm font-semibold">Test Dataset</h3>
                <p>{wordDataset.words.join(", ")}</p>
            </div>

            {/* Display Found Words */}
            <div className="mt-4 p-2 bg-gray-800 rounded text-sm max-h-40 overflow-y-auto">
                <h3 className="text-md font-semibold">Word Results</h3>
                {filteredWords.length > 0 ? (
                    <ul className="list-disc list-inside">
                        {filteredWords.map((word, index) => (
                            <li key={index}>{word}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400">No words found</p>
                )}
            </div>
        </div>
    );
};

export default WordFinder;
