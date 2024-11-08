{
  // Defining the car class
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      const date = new Date();
      const currentYear: number = date.getFullYear();

      const carAge: number = currentYear - this.year;

      return carAge;
    }
  }

  //   Testing
  const newCar = new Car("Honda", "Civic", 2018);

  console.log(newCar.getCarAge());
}
