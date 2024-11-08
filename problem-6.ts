{
  // Interface
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  //   Defining the function
  const updateProfile = (
    currentProfile: Profile,
    updatedObj: Partial<Profile>
  ): Profile => {
    const updatedProfileInfo: Profile = { ...currentProfile, ...updatedObj };
    return updatedProfileInfo;
  };

  //   Checking the result
  const result = updateProfile(
    { name: "Riajul", age: 99, email: "riajulpro@outlook.com" },
    { age: 89 }
  );

  console.log(result);
}
