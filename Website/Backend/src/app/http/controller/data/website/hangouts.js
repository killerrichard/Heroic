import CRUD from '../../../../sql/ext/website/hangouts_crud'
export default class Hangouts {

  static list (req, res) {
    CRUD.read()
      .then (posts => {
        res.status(200).json(posts).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }


  static view (req, res) {
    CRUD.read(req.params.id)
      .then (post => {
        res.status(200).json(post).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }

  static create (req, res) {

    const data = {
      user     : req.decoded.id,
      title    : req.body.title,
      content  : req.body.content,
      thumb    : req.body.thumb,
      category : req.body.category
    }

    CRUD.create(data)
      .then (post => {
        res.status(200).json(post).end()
      })
      .catch (error => {
        console.log(error)
        res.status(400).end()
      })
  }

  static delete (req, res) {
    if (req.decoded.rank.staff == 0) {
      CRUD.retrieve(req.params.id)
        .then (post => {
          if (post.author.id == req.decoded.id) {
            CRUD.delete(req.params.id)
              .then (post => {
                res.status(200).end()
              })
              .catch (error => {
                res.status(400).end()
              })
          } else {
            reject()
          }
        })
    } else {
      CRUD.delete(req.params.id)
        .then (post => {
          res.status(200).end()
        })
        .catch (error => {
          console.log(error)
          res.status(400).end()
        })
    }
  }

  static create_comment (req, res) {
    CRUD.create_comment(req.body)
      .then (comment => {
        res.status(200).json(comment).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }

  static delete_comment (req, res) {
    if (req.decoded.rank.staff == 0) {
      CRUD.retrieve_comment(req.params.id)
        .then (comment => {
          if (comment.user == decoded.id) {
            CRUD.delete_comment(req.params.id)
              .then (comment => {
                res.status(200).end()
              })
              .catch (error => {
                res.status(400).end()
              })
          } else {
            res.status(400).end()
          }
        })
        .catch (error => {
          res.status(400).end()
        })
      } else {
        CRUD.delete_comment(req.params.id)
          .then (comment => {
            res.status(200).end()
          })
          .catch (error => {
            res.status(400).end()
          })
      }
  }

}
