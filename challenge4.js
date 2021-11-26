const args = process.argv;
let result = "";
for (let i = 2; i < args.length; i++) {
  let ending = (args[i][0]) + "ay ";
  let newString = (args[i].slice(1)) + ending;
  result += newString;
}
console.log(result);

// Input:

//     const someToggle = {
//       name:"toggleA",
//       isOn:false
//     }
    
// Output:

//     const someToggle = {
//       name:"toggleA",
//       isOn:true
//     }

const switchToggle = (toggle) => {
  // Code here
     toggle.isOn = ! toggle.isOn
     console.log(toggle.isOn);
      return toggle
  
  // Remember to return a value!
}

