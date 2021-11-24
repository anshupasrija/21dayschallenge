const args = process.argv;
let result = "";
for (let i = 2; i < args.length; i++) {
  console.log(args[i]);
  let ending = (args[i][0]) + "ay ";
  let newString = (args[i].slice(1)) + ending;
  result += newString;
}
console.log(result);