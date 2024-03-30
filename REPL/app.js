const { addNotes, showNotes } = require("./notes");
const command = process.argv[2].trim();
const note = process.argv.slice(3).join(" ");

switch (command) {
  case "add":
    addNotes(note);
    break;
  case "show":
    showNotes();
    break;
  case "delete":

  default:
    console.log("command not found");
}

// a=10;
// b=30;
// console.log(a+b);
// funcntion helloSakib(){console.log("hello everyOne")}
// funcntion helloSakib(){console.log('hello sir')}
// function sayHello () {
// console.log('hello')
// }
// sayHello()
// Math.random()
