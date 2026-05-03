const mongoose = require('mongoose');
const Chat = require("./models/chat");
main().catch(err => console.log(err)).then(res=>{console.log("mongoose work");})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapps');

}

// Chat.insertMany([
//     {
//         from:"tony strak",
//         to:"peter parker",
//         msg:"nex fight in multivers",
//         created_at: new Date(),

//     },
//     {
//         from:"doctor stranger",
//         to:"peter parker",
//         msg:"i want to teach you how to use power and magic",
//         created_at: new Date(),

//     },
//     {
//         from:"flying jat",
//         to:"peter parker",
//         msg:"hello i am indian super hero , do you want to collab with me",
//         created_at: new Date(),

//     },
//     {
//         from:"hulk",
//         to:"peter parker",
//         msg:"i am very angry let go to fight with enimes i wnat fight",
//         created_at: new Date(),

//     },
// ]);
