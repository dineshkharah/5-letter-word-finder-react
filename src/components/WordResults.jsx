const WordResults = ({ filteredWords = [] }) => {
    return (
        <div className="p-4 bg-gray-800 rounded-lg text-sm max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold">Word Results</h3>
            {filteredWords.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 mt-2">
                    {filteredWords.map((word, index) => (
                        <div key={index} className="bg-gray-700 px-3 py-2 rounded-lg text-center">
                            {word}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 mt-2">No words found</p>
            )}
        </div>
    );
};

export default WordResults;
