const express = require('express')
const app = express()
const port = 3001
const router =require('./app/routers/index')

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  