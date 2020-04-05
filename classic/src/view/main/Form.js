// this multicolumn form class is meant to populate some info to a table

Ext.define('FormPrac.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'widget.form-multicolumn',
    controller: 'form',

    title: 'The Wheel of Fate is Turning!',
    frame: false,
    width: 810,
    minWidth: 810,
    minHeight: 300,
    bodyPadding: 0,
    layout: 'column',

    defaults: {
        layout: 'form',
        xtype: 'container',
        defaultType: 'textfield',
        style: 'width: 50%',
    },

    items: [{
        items: [
            {
                fieldLabel: 'Player 1',
                itemId: 'player1-form',
                listeners: {
                    change: 'onFormChange'
                }
            }
        ]
    }, {
        items: [
            {
                fieldLabel: 'Player 2',
                itemId: 'player2-form',
                listeners: {
                    change: 'onFormChange'
                }
            }
        ]
    }],

    buttons: [
        {
            text: 'Player 1',
            itemId: 'player1',
            listeners: { click: 'handleValueSubmit' }
        },
        {
            text: 'Player 2',
            itemId: 'player2',
            listeners: { click: 'handleValueSubmit' }
        }
    ]
});