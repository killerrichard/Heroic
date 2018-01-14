import CRUD from '../../../../sql/ext/website/hangouts_crud'
export default class Hangouts {

  static list (req, res) {
    CRUD.read()
      .then (posts => {
        res.status(200).json(posts).end()
      })
      .catch (error => {
        res.status(400).json(error).end()
      })
  }

  static create (req, res) {

    const data = {
      user    : req.decoded.id,
      title   : req.body.title,
      content : req.body.content
    }

    CRUD.create(data)
      .then (post => {
        res.status(200).json(post).end()
      })
      .catch (error => {
        res.status(400).json({ error : error }).end()
      })
  }

}
