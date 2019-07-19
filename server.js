const express = require('express')
const app = express()

const port = 3002
app.use(express.static('build'))

const server = app.listen(port, () => {
    console.log('listening on port '+port)
})

const io = require('socket.io')(server)

var player_count = 0

io.on('connection', (socket) => {
    if (player_count < 2){
        player_count += 1
        console.log('player ' + player_count + " entered the game")
        // Pull cards at random from deck
        socket.emit('connection', {'new_player': player_count})
    } else {
        console.log('too many players!')
        socket.emit('warn', "game is full")
    }
})

// socket.broadcast.emit()