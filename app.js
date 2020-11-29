const express = require('express')
const app = express()
const port = 3000

var mqtt = require('mqtt');

/*
var client = mqtt.connect('mqtt://3d8f57f8:67f1ba13358e9b30@broker.shiftr.io', {
  clientId: 'octopanel'
});
*/
var client = mqtt.connect('mqtt://172.20.10.3:1883', {
  clientId: 'octopanel'
});

/*
var client = mqtt.connect('mqtt://192.168.1.25:1883', {
  clientId: 'octopanel'
});
*/

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

app.get('/bloall', (req, res) => {
  res.render('index')
  client.publish('/octoblo/blowers', 'blo1')
  client.publish('/octoblo/blowers', 'blo2')
  client.publish('/octoblo/blowers', 'blo3')
  client.publish('/octoblo/blowers', 'blo4')
  client.publish('/octoblo/blowers', 'blo5')
  client.publish('/octoblo/blowers', 'blo6')
  client.publish('/octoblo/blowers', 'blo7')
  client.publish('/octoblo/blowers', 'blo8')
  console.log('/octoblo/blowers', 'bloall')
})

app.get('/winch01/forward', (req, res) => {
  res.render('index')
  client.publish('/ns12/forward')
  console.log('/winch01/forward')
  //console.log('/ns12/target', '1.00')
})

app.get('/winch01/backward', (req, res) => {
  res.render('index')
  client.publish('/ns12/backward')
  console.log('/winch01/backward')
})

app.get('/winch01/stop', (req, res) => {
  res.render('index')
  client.publish('/ns12/stop')
  console.log('/winch01/stop')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
