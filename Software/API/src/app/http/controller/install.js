import File from 'fs'
import Path from 'path'
import Knex from 'knex'
import User from '../../sql/ext/users'
import Website from '../../sql/ext/cms_settings'
export default class Controller {

  static check (req, res) {
    const data =JSON.parse(File.readFileSync(Path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'config.json'), 'utf8'))
    if (data.installation.completed) {
      res.status(200).end()
    } else {
      res.status(400).end()
    }
  }

  static saveDatabase (req, res) {
    // Test It
    Knex({ client :"mysql", connection:{ host : req.body.host, user : req.body.user, password : req.body.password, database : req.body.database } }).raw('SELECT 1+1 AS result')
      // Save It
      .then (result => {
        const data = {
          database : {
            host : req.body.host,
            user : req.body.user,
            password : req.body.password,
            database : req.body.database
          },
          installation : {
            completed : false
          }
        }

        File.writeFileSync(Path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'config.json'), JSON.stringify(data), 'utf-8')
        res.status(200).end()
      })
      // Return 400 (Failed)
      .catch (error => {
        res.status(400).end()
      })
  }

  static saveGeneral (req, res) {
    // Configuration Data
    const data = {
      name        : req.body.name,
      link        : req.body.link,
      findretros  : req.body.findretros,
      fr_user     : req.body.fr_user,
      emu_ip      : req.body.emu_ip,
      emu_port    : req.body.emu_port,
      swf_base    : `${req.body.link}/assets/swfs`
    }

    Website.update(data)
      .then (website => {
        res.status(200).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }


  static saveAdministrator (req, res) {
    // Configuration Data
    const data = {
      username : req.body.username,
      password : req.body.password,
      mail     : req.body.mail,
      rank     : 7
    }

    User.create(data)
      .then (user => {
        res.status(200).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }

  static finish (req, res) {
    const data =JSON.parse(File.readFileSync(Path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'config.json'), 'utf8'))
    data.installation.completed = true
    File.writeFileSync(Path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'config.json'), JSON.stringify(data), 'utf-8')
    res.status(200).end()
  }

}
