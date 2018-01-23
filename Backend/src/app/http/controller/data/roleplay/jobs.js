import CRUD from '../../../../sql/ext/roleplay/job_crud'
export default class Jobs {

  static list (req, res) {
    CRUD.read()
      .then (jobs => {
        res.status(200).json(jobs).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }

  static view (req, res) {
    CRUD.read(req.params.id)
      .then (job => {
        res.status(200).json(job).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }

  static create (req, res) {
    CRUD.create(req.body)
      .then (job => {
        res.status(200).json(job).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }

  static update (req, res) {
    if (req.decoded.rank.staff==1) {
      CRUD.update(req.body)
        .then (job => {
          res.status(200).end()
        })
        .catch (error => {
          res.status(400).end()
        })
    } else {
      res.status(400).end()
    }
  }

  static delete (req, res) {
    CRUD.delete(req.params.id)
      .then (job => {
        res.status(200).end()
      })
      .catch (error => {
        res.status(400).end()
      })
  }

}
