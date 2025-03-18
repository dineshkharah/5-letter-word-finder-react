const WordResults = ({ filteredWords = [] }) => {
    return (
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
    );
};

export default WordResults;
