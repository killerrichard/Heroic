import Ranks from '../../../../sql/ext/emulator/ranks_crud'
export default class Online {

  static get (req, res) {
    Ranks.retrieve('staff', '1')
      .then (users => {
        res.status(200).json(users).end()
      })
      .catch (errors => {
        console.log(errors)
        res.status(400).json(errors).end()
      })
  }

}
