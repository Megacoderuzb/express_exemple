const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, file) => {
    if (err) {
      console.log(err);
    }
    console.log(file);
    res.send(file);
  });
});

app.post("/products", (req, res, next) => {
  let files = fs.readFileSync("./db.json", "utf-8");
  //   fs.readFile("./db.json", "utf-8", (err, file) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(file);
  //     files = file;
  //   });
    files.push(...data);

  //   let data = req.body;
  //   res.send(data);
  console.log(files, "and");
  fs.writeFileSync("./db.json", data, "utf-8");
});

let port = 7000;
app.listen(port, () => {
  console.log("http://localhost:7000/");
});
