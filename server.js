const express = require("express");
const app = express();

const mockUserData = [{ name: "ali" }, { name: "wildan" }];
//route
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "Successfully got users.Nice!",
    users: mockUserData
  });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id
  });
});

// listen method will start
app.listen(8000, () => {
  console.log("server is running");
});
