const child = require('child_process')

const gui      = child.spawn('./gui/boot.js')
const website  = child.spawn('./website/boot.js')
//const emulator =

gui.on('exit', (message => {
  process.exit()
}))

website.on('exit', (message => {
  process.exit()
}))
