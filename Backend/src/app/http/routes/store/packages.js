import Controller from '../../controller/store/packages'
export default class Routes {

    constructor(http) {
        http.post('/api/auth/admin/store/packages', Controller.create)
        http.get('/api/store/packages/:id', Controller.read)
        http.patch('/api/auth/admin/store/packages/:id', Controller.update)
        http.delete('/api/auth/admin/store/packages/:id', Controller.delete)
    }

}