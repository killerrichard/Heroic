export default class Utility
{
    constructor($mdToast, $mdDialog)
    {
        'ngInject'

        this.$mdToast 		= $mdToast
        this.$mdDialog 	    = $mdDialog
    }

    toast(message)
    {
        if(message == '' || null) return

        return this.$mdToast.show(
            this.$mdToast.simple({
                hideDelay: 3000,
                textContent: message
            }))
    }

    alert(message)
    {
        if(message == '' || null) return

        return this.$mdDialog.show(
            this.$mdDialog.alert({
                title: 'HabboAPI',
                textContent: message,
                ok: 'Close'
            }))
    }
}
