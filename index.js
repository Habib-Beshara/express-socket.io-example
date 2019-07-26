const io = require('socket.io')
const express = require('express')

const app = new express()

app.use(express.static('./public'))

const server = app.listen(3000, () => {
  console.log('app is working on port 3000')
})

// socket
const ws = io(server)
ws.on('connection', (socket) => {
  console.log('connection established')

  socket.on('msg', (data) => {
    ws.sockets.emit('chat', data)
  })

})

