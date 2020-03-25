const express = require('express');
const app = express();


const mockUserData = [
  {name:'ali'},
  {name:'wildan'}
]
//route
app.get('/user',(req,res) => {
  res.json({
    success:true,
    message:'Successfully got users.Nice!',
    users:mockUserData
  })
})

// listen method will start
app.listen(8000, () => {
  console.log("server is running")
})