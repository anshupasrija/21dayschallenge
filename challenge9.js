// Input:

//     const exampleRoster = [
//       {
//         ...
//         job:"Shuttle DJ"
//       },
//       {
//         ...
//         job:"Space Cook"
//       }
//     ] 
    
// Output:

//     ["Shuttle DJ", "Space Cook"]
const listAstronautJobs = (roster) => {
  // Code here!
   const string = roster.map(x => x.job);
   return string;
}