import CRUD from '../../../../sql/ext/website/radio_crud'
export default class Radio {

  static list (req, res) {
    CRUD.read()
      .then (songs => {
        res.status(200).json(songs).end()
      })
      .catch (error => {
        res.status(400).json({ error : error }).end()
      })
  }

  static create (req, res) {

    const data = {
      user        : req.decoded.id,
      video_id    : req.body.video_id,
      video_title : req.body.video_title,
      video_image : req.body.video_image
    }

    CRUD.create(data)
      .then (song => {
        res.status(200).json(song).end()
      })
      .catch (error => {
        res.status(400).json({ error : error }).end()
      })
  }

}
