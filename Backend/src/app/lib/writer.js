export default class Writer {

  static push (msg, type) {
    
    if (!type) type = 'SUCCESS'

    if (Array.isArray(msg)) {
      msg.forEach(m => {
        console.log(`   [${type}] ${m}`)
      })
    } else {
      console.log(`   [${type}] ${msg}`)
    }
  }

}
