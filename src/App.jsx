import React, { useState } from "react";
import WordResults from "./components/WordResults";
import WordFinder from "./components/WordFinder";

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">5-Letter Word Finder</h1>

      <div className="flex justify-center gap-8 w-full max-w-6xl">
        {/* Left side - Word Finder */}
        <div className="w-96 bg-gray-800 p-6 rounded-lg border-2 border-white shadow-lg">
          <WordFinder setResults={setResults} />
        </div>

        {/* Right side - Word Results */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg border-2 border-white shadow-lg">
          <h2 className="text-lg font-bold">Word Results</h2>
          <WordResults filteredWords={results} />
        </div>
      </div>
    </div>
  );
};

export default App;
