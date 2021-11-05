const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const path = require('path');


publicPath = path.join(__dirname, './public')
app.use(express.static(publicPath))

app.use('/', router);
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})