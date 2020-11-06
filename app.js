const express = require('express')
const app = express()
const port = 3000

var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://3d8f57f8:67f1ba13358e9b30@broker.shiftr.io', {
  clientId: 'octopanel'
});

client.on('connect', function(){
  console.log('client has connected!');

  client.subscribe('/octoblo');

});

client.on('message', function(topic, message) {
  console.log('new message:', topic, message.toString());
});

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/blo1', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo1')
  console.log('/octoblo/blowers', 'blo1')
})

app.get('/blo2', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo2')
  console.log('/octoblo/blowers', 'blo2')
})

app.get('/blo3', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo3')
  console.log('/octoblo/blowers', 'blo3')
})

app.get('/blo4', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo4')
  console.log('/octoblo/blowers', 'blo4')
})

app.get('/blo5', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo5')
  console.log('/octoblo/blowers', 'blo5')
})

app.get('/blo6', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo6')
  console.log('/octoblo/blowers', 'blo6')
})

app.get('/blo7', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo7')
  console.log('/octoblo/blowers', 'blo7')
})

app.get('/blo8', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo8')
  console.log('/octoblo/blowers', 'blo8')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
