// const parseMessage = (origin, message) => {
//   // Code here!
//     return (origin + ":" + " " + message);
//   // Want to see what's going on inside your function?
//   // You can use console.log() to debug and print variables to the console below.

//   // Remember to return a value!
// }
//  parseMessage("Mission Control", "Hello there!")

// //  Output:

// // Mission Control: Hello there!



const reverse = function(string){
let backward = "";
for (let i = string.length - 1; i >= 0; i--) {
  backward += string[i];
}
 return backward;
}
process.argv.slice(2).forEach(string => {
  console.log(reverse(string));
});