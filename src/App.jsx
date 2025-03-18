import React, { useState, useEffect } from "react";
import WordResults from "./components/WordResults";
import WordFinder from "./components/WordFinder";

const App = () => {
  const [results, setResults] = useState([]);
  const [wordDataset, setWordDataset] = useState([]);

  // Load words from JSON
  useEffect(() => {
    fetch("/words.json")
      .then(response => response.json())
      .then(data => setWordDataset(data.words))
      .catch(error => console.error("Error loading words:", error));
  }, []);

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold text-center mb-5">5-Letter Word Finder</h1>

      <div className="flex justify-center items-start gap-8 w-full max-w-7xl">
        {/* Left side - Dynamic Height */}
        <div className="w-96 bg-gray-800 p-6 rounded-lg border-2 border-white/40 shadow-lg flex flex-col">
          <WordFinder setResults={setResults} />
        </div>

        {/* Right side - Match Left Side Height */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg border-2 border-white/40 shadow-lg flex flex-col">
          <WordResults filteredWords={results} allWords={wordDataset} />
        </div>
      </div>
    </div>
  );
};

export default App;
