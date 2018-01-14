import CRUD from '../../../../sql/ext/website/category_crud'
export default class Category {

  static list (req, res) {
    CRUD.read()
      .then (categories => {
        res.status(200).json(categories).end()
      })
      .catch (error => {
        res.status(400).json({ error : error }).end()
      })
  }

  static get (req, res) {
    //
  }

}
