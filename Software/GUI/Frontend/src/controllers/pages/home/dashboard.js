export default class Controller
{
    constructor(PageManager)
    {
        'ngInject'
        PageManager.transition('dashboard')
    }

}
