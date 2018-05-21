const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

const names = [
  'Edwin Encomienda',
  'Judy Ann Palomar',
  'Estela Encomienda'
]

app.get('/names', (req, res) => {
  res.json(names)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})

const ageFilter = (age) => {
  return age + 22
}