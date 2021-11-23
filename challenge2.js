const generateAstronautTag = (astronaut) => {
  // Code here!
  return (astronaut.prefix + ":" + " " + astronaut.firstName + " " +  '"' + astronaut.nickname + '"'+ " " + astronaut.lastName);

  // Remember to return a value!
}
// Input:

// const exampleAstronaut = {
//   firstName: "Yuri",
//   lastName: "Gagarin",
//   nickname: "First!",
//   prefix: "Cosmonaut"
// }

// Output:

// Cosmonaut: Yuri "First!" Gagarin