// Input:

//     const gaugeList = [
//       {
//         current:0.4,
//         min:0.1,
//         max:0.9
//       },
//       {
//         current:1.2,
//         min:0.1,
//         max:0.6
//       }
//     ]
    
// Output:

//     false

const checkAllGauges = (gaugeList) => {
  // Code here!
  for(const gauge of gaugeList){
    console.log(gauge);
    if(gauge.current < gauge.min || gauge.current > gauge.max)
      {
      
         return false;
      }
   }
     return true;
  }