import Jobs from '../../model/roleplay/jobs'
export default class CRUD {

  static create (data) {
    return new Promise ((resolve, reject) => {
      new Jobs(data).save()
        .then (job => {
          job.fetch({ columns : ['id', 'name', 'desc', 'badge', 'owner_id'], withRelated : ['owner'] })
            .then (job => {
              resolve(job.toJSON())
            })
            .catch (error => {
              reject()
            })
        }).catch (error => {
          reject()
        })
    })
  }

  static read (id) {
    return new Promise ((resolve, reject) => {
      if (id) {
        Jobs.where('id', id).fetch({ columns : ['id', 'name', 'desc', 'created', 'badge', 'owner_id'], withRelated : ['owner', 'employees', 'employees.user'] })
          .then (job => {
            if (job) {
              resolve(job.toJSON())
            } else {
              reject()
            }
          })
          .catch (error => {
            reject()
          })
      } else {
        Jobs.query('orderBy', 'id', 'DESC').fetchAll({ columns : ['id', 'name', 'desc', 'badge', 'owner_id'], withRelated : ['owner']})
          .then (job => {
            if (job) {
              resolve(job.toJSON())
            } else {
              reject()
            }
          })
          .catch (error => {
            reject()
          })
      }
    })
  }

  static update (data) {
    return new Promise ((resolve, reject) => {
      new Jobs(data).save()
        .then (job => {
          resolve()
        })
        .catch (error => {
          console.log(error)
          reject()
        })
    })
  }

  static delete (id) {
    return new Promise ((resolve, reject) => {
      Jobs.where('id', id).fetch()
        .then (job => {
          if (job) {
            job.destroy()
              .then (job => {
                resolve()
              })
              .catch (error => {
                reject()
              })
          } else {
            reject()
          }
        })
    })
  }

}
