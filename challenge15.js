// const toggleList = [
// 	{
// 		name:"Air",
// 		isOn:true
// 	},
// 	{
// 		name:"Radio",
// 		isOn:false
// 	},
// ]
    
// Output:

// [
// 	{
// 		name:"Air",
// 		isOn:true
// 	},
// 	{
// 		name:"Radio",
// 		isOn:true
// 	},
// ]
const switchAllTogglesOn = (toggleList) => {
  // Code here!
  for(const obj of toggleList){
    obj.isOn = true ;
  }
  return toggleList;
}