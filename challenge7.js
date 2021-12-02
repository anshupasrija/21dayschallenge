// Input:

//     const temperature = 32
//     const condition = "Sunny with small clouds"
//     const windSpeed = 20
//     const windDirection = "NNE
    
// Output:

//     {
//       temperature:0,
//       windSpeed:9,
//       windDirection:"NNE",
//       condition:"Sunny with small clouds"
//     }

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here
  temperature = Math.round((temperature - 32) * 5/9);
  windSpeed = Math.round(windSpeed/2.237);
  const object = {temperature,windSpeed,windDirection ,condition};
  return object;
  // Remember to return an object!
};