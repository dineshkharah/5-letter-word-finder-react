const WordResults = ({ filteredWords = [], allWords = [] }) => {
    // If no filters applied, show more words
    const wordsToShow = filteredWords.length > 0 ? filteredWords : allWords.slice(0, 50);

    return (
        <div className="flex flex-col bg-gray-800 rounded-lg text-sm h-full max-h-full">
            {/* Fixed Header */}
            <div className="sticky top-0 bg-gray-800 py-4 z-10 text-center">
                <h2 className="text-lg font-bold">Word Results</h2>
            </div>

            {/* Scrollable Word Grid */}
            <div className="overflow-y-auto flex-1 p-4 max-h-[calc(100vh-250px)]">
                {wordsToShow.length > 0 ? (
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                        {wordsToShow.map((word, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 px-5 py-3 rounded-md text-white font-semibold text-center shadow-md"
                            >
                                {word}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-300 text-center">No words found</p>
                )}
            </div>
        </div>
    );
};

export default WordResults;
