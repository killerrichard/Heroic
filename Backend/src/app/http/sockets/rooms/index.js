import Radio from './radio'
export default class Routes {

  static load (io, callback)  {
    io.on('connection', (socket => {
      Routes.default(io, socket)
      Radio.prepare(io, socket)

      socket.on('join_room', (room => {
        socket.join(room)
      }))
    }))
    callback()
  }

  static default (io, socket) {
    io.emit('user_joined', io.engine.clientsCount)

    socket.on('disconnect', () => {
      io.emit('user_left', io.engine.clientsCount)
    })

  }


}
