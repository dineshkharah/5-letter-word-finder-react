export const filterWords = (wordDataset, knownLetters, unknownLetters, notIncluded) => {
    let possibleWords = [...wordDataset];

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

    return possibleWords;
};
