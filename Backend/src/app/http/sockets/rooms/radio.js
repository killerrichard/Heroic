import Memory from 'memory-cache'
import Number from '../../../lib/number'
export default class Radio  {

  static prepare (io) {
    // Tasks
    io.sockets.in('radio').on('connection', socket => {
      Radio.handle (io, socket)
      Radio.welcome (socket)
      Radio.load_playlist (socket)
      Radio.refresh_playlist(io, socket)
      Radio.modify_playlist(io, socket)
    })
  }

  static handle (io, socket) {
    io.sockets.in('radio').emit('user_joined', io.engine.clientsCount)
    socket.on('disconnect', () => {
      io.emit('user_left', io.engine.clientsCount)
    })
  }

  static welcome (socket) {
    let playing = Memory.get('playing')
    if (playing) {
      playing.start = Number.toSecondsFromNow(playing.start)
      socket.emit('welcome', playing)
      socket.emit('load_playlist', Memory.get('playlist'))
    }
  }

  static load_playlist (socket) {
    socket.emit('load_playlist', Memory.get('playlist'))
  }

  static modify_playlist (io, socket, data) {
    if (data) {
      Memory.put('playlist', data)
      io.sockets.in('radio').emit('load_playlist', data)
    } else {
      socket.on('modify_playlist', (data => {
        let playlist = Memory.get('playlist') || []
        playlist.push(data)
        Memory.put('playlist', playlist)
        io.sockets.in('radio').emit('load_playlist', playlist)
        if (Memory.get('playing') == null) {
          Radio.change_song(io, socket, data)
        }
      })) 
    }
  }

  static refresh_playlist (io, socket) {
    socket.on('refresh_playlist', (data => {
      Memory.put('playlist', data)
      io.sockets.in('radio').emit('load_playlist', data)
    }))
  }

  static change_song (io, socket, data) {
    io.sockets.in('radio').emit('change_song', data)
    data.start = Date.now()
    data.duration = Number.youtube(data.duration) * 1000
    Memory.put('playing', data)
    setTimeout(() => {
      Radio.song_ended(io, socket)
    }, data.duration)
  }

  static song_ended (io, socket) {
    Memory.del('playing')
    let playlist = Memory.get('playlist') || []
    playlist.shift()
    Radio.modify_playlist(io, socket, playlist)
    if (playlist[0]) Radio.change_song(io, socket, playlist[0])
  }

}
