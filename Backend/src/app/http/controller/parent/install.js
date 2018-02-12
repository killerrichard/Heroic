// What I Need
/*
  - Add Camera login
  - Modify SWFs
  - Modify config.ini
*/

import File from 'fs'
import Path from 'path'
import Knex from 'knex'
import Installation from '../../../config/install'
import User from '../../../sql/ext/emulator/user_crud'
import Website from '../../../sql/ext/website/settings'
export default class Controller {

  static check (req, res) {
    if (Installation.status) {
      res.status(200).end()
    } else {
      res.status(400).end()
    }
  }

  static saveDatabase (req, res) {
    // Configuration Data
    const data = {
      client      : 'mysql',
      connection  : {
        host : req.body.host,
        user : req.body.user,
        password : req.body.password,
        database : req.body.database
      }
    }


    // Test It
    Knex(data).raw('SELECT 1+1 AS result')
      // Save It
      .then (result => {
        File.writeFileSync(Path.join(__dirname, '..', '..', '..', 'config', 'database.json'), JSON.stringify(data), 'utf-8')
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
      swf_folder  : `${req.body.link}/assets/swfs`
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
        console.log(data)
        res.status(200).end()
      })
      .catch (error => {
        console.log(error)
        res.status(400).end()
      })
  }

  static finish (req, res) {
    const data = {
      status : true
    }
    File.writeFileSync(Path.join(__dirname, '..', '..', '..', 'config', 'install.json'), JSON.stringify(data), 'utf-8')
    res.status(200).end()
  }

}
