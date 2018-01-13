import Likes from '../../../../sql/ext/emulator/likes_crud'
import Pictures from '../../../../sql/ext/emulator/photos_crud'
export default class Photos {

  static get (req, res) {
    Pictures.read()
      .then (photos => {
        res.status(200).json(photos).end()
      })
      .catch (errors => {
        res.status(400).json(errors).end()
      })
  }

  static like (req, res) {
    Likes.create({ user_id : req.session.auth.id, photo_id : req.body.photo_id })
      .then (likes => {
        if (likes == 'liked') {
          res.status(200).json({ status : 'liked'})
        } else {
          res.status(200).json({ status : 'unliked'})
        }
      })
      .catch (errors => {
        console.log(errors)
        res.status(400).json(errors).end()
      })
  }

}
