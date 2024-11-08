{
  // Defining the function
  const getProperty = <P extends { name: string }, Q extends keyof P>(
    userInfo: P,
    propName: Q
  ): P[Q] => {
    return userInfo[propName];
  };

  //   Calling the function
  console.log(getProperty({ name: "Uncle Riajul Pro" }, "name"));
}
