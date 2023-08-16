const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/static", express.static(__dirname + "/static"));

// routes 뒤에 생략 가능한건 index뿐
const router = require("./routes/user");
app.use("/user", router);

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
