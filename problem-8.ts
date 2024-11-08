{
  // defining the function
  const validateKeys = <T extends {}>(
    obj: T,
    arrayKey: (keyof T)[]
  ): boolean => {
    const objectKeys = Object.keys(obj);
    const isExistAll = arrayKey.every((keyText) => keyText in objectKeys);

    return isExistAll;
  };

  //   Calling the functions
  const result = validateKeys({ name: "Putra", age: 27 }, ["name"]);

  console.log(result);
}
