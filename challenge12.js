// const messages = [
//   {origin:"MC", message:"Hello!"},
//   {origin:"Shuttle", message:"Hey!"},
// ]

// Output:

// [
//   "MC: Hello!",
//   "Shuttle: Hey!"
// ]


const parseTranscripts = (messages) => {
  // Code here!
  const parseMessage = [];
  for (const result in messages) {
    const value = messages[result].origin + ": " + messages[result].message;
    parseMessage.push(value);
    console.log(value);
  }
  return parseMessage;
}
