const ws = io.connect('http://localhost:3000')

let
  handle = document.getElementById('handle'),
  msg = document.getElementById('message'),
  button = document.getElementById('send'),
  output = document.getElementById('output')

button.addEventListener('click', function () {
  ws.emit('msg', {
    handle: handle.value,
    message: msg.value,
  })
})

ws.on('chat', function (data) {
  output.innerHTML += '<h3>'+data.handle+': </h3><p>'+data.message+'</p><br>'
})