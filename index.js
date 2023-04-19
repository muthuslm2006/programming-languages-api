const express = require("express");
const app = express();
const port = 3000;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
const LoginPageRouther=require("./routes/login");
const authlogin=require("./auth");

// const connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : 'password',
// 	database : 'stashook'
// });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Connected" });
});


app.use("/programming-languages", programmingLanguagesRouter);
app.use("/loginpage",LoginPageRouther)
app.use("/register",LoginPageRouther)
// app.use("/auth",LoginPageRouther)


app.use(express.json());
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 