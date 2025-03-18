import React, { useState } from "react";
import WordFinder from "./components/WordFinder";

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">5-Letter Word Finder</h1>
      <div className="w-full max-w-lg">
        <WordFinder setResults={setResults} />
      </div>
    </div>
  );
};

export default App;
