import Random from 'randomstring'
import User from '../../../sql/model/emulator/users'
export default class SSO {

  static fetch (req, res) {
    const token = `heroic_${Random.generate(7)}`
    User.where('id', req.decoded.id).save({ auth_ticket : token }, { method : 'update' })
      .then (user => {
        res.status(200).json({ auth_ticket : token }).end()
      })
      .catch (error => {
        console.log(error)
        res.status(400).end()
      })
  }

}
