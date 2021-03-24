const express = require('express')
const app = express()


function rootCall(req, res) {
  res.send('Heollo world by fahim')
}
  app.get('/',rootCall)
  app.listen(4000,()=>console.log('listening on'))