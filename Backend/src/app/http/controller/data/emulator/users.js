import CRUD from '../../../../sql/ext/emulator/user_crud'
export default class Users {

  static get (req, res) {
    CRUD.retrieve('username', req.params.username, 'single')
      .then (user => {
        res.status(200).json(user).end()
      })
      .catch (error => {
        console.log(error)
        res.status(400).json(error).end()
      })
  }
}
