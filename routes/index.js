const express = require('express')
const router = express.Router();

const mockUserData = [{
  name: "ali"
}, {
  name: "wildan"
}];

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Successfully got users.Nice!",
    users: mockUserData
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id
  });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // This should come from the database
  const mockUsername = "wildan";
  const mockPassword = "okerapopo";

  if (username === mockUsername && password === mockPassword) {
    // In practice, use JSON web token sign method here to make an encrypted token
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      success: false,
      message: 'password and username do not match'
    })
  }
})

module.exports = router;