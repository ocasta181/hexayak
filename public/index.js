const socket = io.connect("http://localhost:3002")

socket.on('player_info', (data) => {
    console.log("you are player number: ",data.player)
})

socket.on('warn', (data) => {
    console.log(data.warning)
})