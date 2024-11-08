{
  // Defining the interfaces
  interface Circle {
    shape: string;
    radius: number;
  }

  interface Rectangle {
    shape: string;
    height: number;
    width: number;
  }

  const calculateShapeArea = (shapeProps: Circle | Rectangle) => {
    if (shapeProps.shape === "circle") {
      if ("radius" in shapeProps) {
        return (Math.PI * shapeProps.radius * shapeProps.radius).toFixed(2);
      }
    }

    if (shapeProps.shape === "rectangle") {
      if ("height" in shapeProps && "width" in shapeProps) {
        return shapeProps.height * shapeProps.width;
      }
    }
  };

  //   Having the result for both
  console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
  console.log(
    calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    })
  );
}
