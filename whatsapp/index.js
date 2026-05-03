const express = require('express');
const ejs = require('ejs');
const app = express();

const mongoose = require('mongoose');
const methodOverride=require("method-override");

const Chat= require("./models/chat.js");
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

main().catch(err => console.log(err)).then(res=>{console.log("mongoose work");})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapps');

}

// const chat1= new Chat({
//     from: "amrit gurung",
//     to:" ram bahadur",
//     msg:"hello how are you",
//     created_at: new Date(),

// });
// chat1.save().then(res=>{console.log(res);}).catch(err=>{console.log(err);});

app.get("/",(req,res)=>{
    res.send("hello welcome to page");
});

app.get("/chats",async(req,res)=>{
    let chats= await Chat.find();
    res.render ("index.ejs",{chats})
});
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/chats/new",async (req,res)=>{
    let {from,to,msg}= req.body;

    const info1= new Chat({
    from: from,
    to: to,
    msg:msg,
    created_at: new Date(),

});
 info1.save().then(res=>{console.log(res);}).catch(err=>{console.log(err);})
res.redirect("/chats")
});


app.get("/chats/:id/edit",async(req,res)=>{
    let {id}= req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
    

});

app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg: newmsg}=req.body;
    let updatechat= await Chat.findByIdAndUpdate(id, {msg:newmsg}, {new:true,runValidators:true} );
    res.redirect("/chats");
});
app.delete("/chats/:id/delete",async (req,res)=>{
    let {id}=req.params;
   let chatdelete= await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

    app.listen(8080,()=>{
    console.log("Connection sucessul");
});


