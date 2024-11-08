{
  // Defining the function for removing duplicates
  const removeDuplicates = (arrayOfNumbers: number[]): number[] => {
    let cleanArray: number[] = [];

    for (const num of arrayOfNumbers) {
      if (!cleanArray.includes(num)) {
        cleanArray.push(num);
      }
    }

    return cleanArray;
  };

  //   Calling the function
  const result = removeDuplicates([1, 1, 2, 3, 3, 4, 2, 3, 1, 5, 6, 4]);

  console.log("The cleaned array is: ", result);
}
