{
  // Defining the function for counting words
  const countWordOccurrences = (sentence: string, word: string): number => {
    const listOfWords: string[] = sentence.toLowerCase().split(" ");
    const lowerCaseWord: string = word.toLowerCase();

    const matchedWords: string[] = [];

    for (const word of listOfWords) {
      if (word === lowerCaseWord) {
        matchedWords.push(word);
      }
    }

    return matchedWords.length;
  };

  //   Calling the function
  const result = countWordOccurrences(
    "I love TypeScript Typescript is awesome",
    "typeScript"
  );

  console.log("The matches count is: ", result); // The matches count is: 2
}
