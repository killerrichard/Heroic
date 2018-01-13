import Users from '../../../../sql/ext/emulator/user_crud'
export default class Online {

  static get (req, res) {
    Users.retrieve('online', '1')
      .then (users => {
        res.status(200).json(users).end()
      })
      .catch (errors => {
        console.log(errors)
        res.status(400).json(errors).end()
      })
  }

}
