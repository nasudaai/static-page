const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))

app.get('/express', (req, res) => {
  res.send('express')
})



app.listen(port, () => {
  console.log(`app listening http://localhost:${port}`)
})
