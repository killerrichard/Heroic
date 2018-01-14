import CRUD from '../../../../sql/ext/website/news_crud'
export default class News  {

  static get (req, res) {
    if (req.params.id) {
      CRUD.read(req.params.id)
        .then (website => {
          res.status(200).send(website).end()
        })
        .catch (error => {
          console.log(error)
          res.status(500).send(error).end()
        })
    } else {
      CRUD.read()
        .then (website => {
          res.status(200).send(website).end()
        })
        .catch (error => {
          console.log(error)
          res.status(500).send(error).end()
        })
    }
  }
}
