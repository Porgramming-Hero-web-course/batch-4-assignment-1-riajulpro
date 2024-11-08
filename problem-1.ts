{
  // Function declaration for making sum
  const sumArray = (numbers: number[]): number => {
    const sumOfTheNumbers = numbers.reduce((acc, c) => acc + c, 0);

    return sumOfTheNumbers;
  };

  //   Call the function to get the result
  const result = sumArray([1, 2, 3, 4]);

  console.log("The result is: ", result); // The result is:  10
}
