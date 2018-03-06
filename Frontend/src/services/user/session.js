export default class Session
{

  constructor (JWTService, $http, $localStorage, $rootScope, $q, $window) {
    'ngInject'
    Session.$http         = $http
    Session.$localStorage = $localStorage
    Session.$rootScope    = $rootScope
    Session.$q            = $q
    Session.$window       = $window
  }


  create (token, username)  {
    return Session.$q ((resolve, reject) => {
      Session.$localStorage.token = token
      Session.$http.get(`/api/auth/users/session/${username}`)
        .then (session => {
          Session.$localStorage.session = session.data 
          Session.$rootScope.session    = session.data
          resolve()
        })
        .catch (error => {
          Session.$localStorage.$reset()
          Session.$rootScope.session = undefined
          reject()
        })
      })
    }

  validate () {
    if (Session.$localStorage.session) {
      Session.$http.get(`/api/auth/users/session/${Session.$localStorage.session.username}`)
        .then (session => {
          Session.$localStorage.session = session.data
          Session.$rootScope.session    = session.data
          return true
        })
        .catch (error => {
          Session.$localStorage.$reset()
          Session.$rootScope.session = undefined
          return false
        })
      }
  }

  delete () {
    Session.$localStorage.$reset()
    Session.$rootScope.session = undefined
    Session.$window.location.reload()
  }

  status () {
    if (Session.$localStorage.session) {
      return true
    } else {
      return false
    }
  }


}
