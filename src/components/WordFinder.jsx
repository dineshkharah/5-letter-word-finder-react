import { useState, useEffect } from "react";
import WordInput from "./WordInput";
import { filterWords } from "../utils/wordFilter";

const WordFinder = ({ setResults }) => {
    const [knownLetters, setKnownLetters] = useState(["", "", "", "", ""]);
    const [unknownLetters, setUnknownLetters] = useState(["", "", "", "", ""]);
    const [notIncluded, setNotIncluded] = useState(["", "", "", "", ""]);
    const [filteredWords, setFilteredWords] = useState([]);
    const [wordDataset, setWordDataset] = useState([]);

    // Load words from words.json
    useEffect(() => {
        fetch("/words.json")
            .then(response => response.json())
            .then(data => setWordDataset(data.words))
            .catch(error => console.error("Error loading words:", error));
    }, []);

    // Find words based on inputs
    const findWords = () => {
        const results = filterWords(wordDataset, knownLetters, unknownLetters, notIncluded);
        setResults(results);
    };

    return (
        <div className="bg-gray-900 p-6 rounded-lg text-white shadow-lg">
            <h2 className="text-lg font-bold">Word Finder & Unscrambler</h2>

            <WordInput
                title="Known positions"
                subtitle="Letters: Order sensitive"
                letters={knownLetters}
                setLetters={setKnownLetters}
                bgColor="bg-green-500"
            />

            <WordInput
                title="Unknown positions"
                subtitle="Letters: Not order sensitive"
                letters={unknownLetters}
                setLetters={setUnknownLetters}
                bgColor="bg-yellow-500"
            />

            <WordInput
                title="Not included"
                subtitle="Letters: Not order sensitive"
                letters={notIncluded}
                setLetters={setNotIncluded}
                isGrid={true}
            />

            {/* Buttons */}
            <div className="mt-4 flex gap-2">
                <button
                    className="flex-1 bg-gray-700 py-2 rounded hover:bg-gray-600 transition"
                    onClick={() => {
                        setKnownLetters(["", "", "", "", ""]);
                        setUnknownLetters(["", "", "", "", ""]);
                        setNotIncluded(["", "", "", "", ""]);
                        setFilteredWords([]);
                    }}
                >
                    Reset
                </button>
                <button className="flex-1 bg-blue-500 py-2 rounded hover:bg-blue-400 transition" onClick={findWords}>
                    Find words
                </button>
            </div>

        </div>
    );
};

export default WordFinder;
