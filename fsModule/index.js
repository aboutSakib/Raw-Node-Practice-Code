//**** */ Assynchronus function***
// const fs = require("fs");
//using appendFile
//using readfile
//using writeFile
//Rename File
//unlink file(delete file)
// fs.unlink("hello2.txt", (error) => {
//   if (error) {
//     console.log(err);
//   } else {
//     console.log("Delete sucessfully");
//   }
// });

// **sychronus function**
// fs.writeFileSync("hello.txt", "Hello world");
// const data = fs.appendFileSync("hello.txt", " Hello world,how are you");
// console.log(data);

// Os,path
// const os = require("os");
// console.log(os.userInfo());
// console.log(os.freemem());

const path = require("path");
const extensionName = path.extname("index.html");
console.log(extensionName);
