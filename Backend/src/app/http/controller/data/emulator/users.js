import Async from 'async'
import CRUD from '../../../../sql/ext/emulator/user_crud'
import Stats from '../../../../sql/ext/roleplay/stats_crud'
export default class Users {

  static get (req, res) {
    CRUD.retrieve('username', req.params.username, 'single')
      .then (user => {
        res.status(200).json(user).end()
      })
      .catch (error => {
        res.status(400).json(error).end()
      })
  }

  static leaderboard (req, res) {
    Async.parallel([
      // Credits
      function (callback) {
        CRUD.retrieveTop('credits', 10)
          .then (users => {
            callback(null, users)
          })
          .catch (error => {
            callback(error)
          })
      },
      // Kills
      function (callback) {
        Stats.retrieveTop('hit_kills', 10)
          .then (users => {
            callback(null, users)
          })
          .catch (error => {
            callback(error)
          })
      }
    ], ((errors, results) => {
      if (!errors) {
        res.status(200).json({ credits : results[0], pixels : results[1] }).end()
      } else {
        console.log(errors)
        res.status(400).json({ error : errors }).end()
      }
    }))
  }


}
