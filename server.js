const express = require('express')
const app = express()

const port = 3002
app.use(express.static('public'))

const server = app.listen(port, () => {
    console.log('listening on port '+port)
})

const io = require('socket.io')(server)

var player_count = 0

io.on('connection', (socket) => {
    if (player_count < 2){
        player_count += 1
        console.log('player '+player_count+" entered the game")
    } else {
        console.log('too many players!')
    }
})