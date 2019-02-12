const express = require("express")
const app = express();

const dbconfig = require("./dbconfig.js")
dbconfig.init();

//app.get("/", (req, res) => res.send("Hello"));
app.get("/api/v1/list", (req, res) => {
  const todolist =[
    {title: "JavaScriptを勉強する", done: true},
    {title: "Npde.jsを勉強する", done: false},
    {title: "Web APIを作る", done: false}
  ];

  res.json(todolist);
});

app.listen(3000, () => console.log("Listening on port 3000"));
