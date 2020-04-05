

Ext.define('FormPrac.view.main.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form',


    onFormChange: function (e) {

        //find reference to form field
        const itemIdQuery = '#' + e.initialConfig.itemId

        const formReference = Ext.ComponentQuery.query(itemIdQuery)
        console.log('ref: ', formReference)

        // use getValue to find form value
        const formValue = formReference[0].value
        console.log('value: ', formValue)
        //save value to local storage when user clicks away from form field
    },

    handleValueSubmit: function (e) {
        //find out which button was pressed
        //save that value to local storage
        console.log(e)
        const submitPlayer = e.config.text
        console.log(submitPlayer)

        const playerRefs = {
            player1: Ext.ComponentQuery.query('#player1-form'),
            player2: Ext.ComponentQuery.query('#player2-form')
        }

        localStorage.setItem(submitPlayer)


    }

})