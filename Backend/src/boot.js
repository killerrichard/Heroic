import Heroic from './app/heroic'
global.home = __dirname
process.stdout.write('\x1B[2J')
new Heroic(Date.now())
