const path = require('path')
const express = require('express')
const router = express.Router()

// const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname, '/views')
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views', viewsPath)


app.get('/',function(req,res){
  res.sendFile(path.join(viewsPath+'/index.html'))

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})