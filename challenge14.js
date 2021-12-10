// Input:

//     const launchDate = "2021-12-12"
//     const fakeToday = "2021-12-01"
//     const missionName = "Moon visit"
    
// Output:

//     {
//       missionName = "Moon visit",
//       daysRemaining = 11
//     }
const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!

  // Code here
  const launchdate = new Date(launchDate);
  const daysRemaining =(launchdate.getTime() - today.getTime())/(1000 * 60 * 60 * 24)
  
  return {missionName, daysRemaining}
}
