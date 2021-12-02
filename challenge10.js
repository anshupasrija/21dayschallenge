// Input:

//     const exampleEntries = [
//       { 
//         temperature:0, 
//         weather:"sunny", 
//         windDirection: "NNE", 
//         windSpeed:24
//       },
//       { 
//         temperature:10, 
//         weather:"cloudy", 
//         windDirection: "NNE", 
//         windSpeed:9 
//       }
//     ] 
    
// Output:

//     17
const averageWindSpeed = (weatherEntries) => {
  // Code here!
  let result = 0;
  const average = weatherEntries.map(x=> x.windSpeed)
  let total = 0;
  for(const avg of average){
    total = (total + avg);
  }
  result= Math.round(total/average.length);
  return result;
}
