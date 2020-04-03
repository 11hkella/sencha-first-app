


Ext.define('FormPrac.view.main.BasicGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'array-grid',
    // controller: 'basicgrid',

    requires: [
        'Ext.grid.column.Action'
    ],

    title: 'Score Board',
    width: 950,
    height: 350,

    // store: 'Companies',
    stateful: true,
    multiSelect: true,
    stateId: 'stateGrid',
    headerBorders: false,

    viewConfig: {
        enableTextSelection: true
    },

    columns: [{
        text: 'Player',
        flex: 1,
        width: 150,
        dataIndex: 'name'
    }, {
        text: 'Message',
        width: 600,
        dataIndex: 'message'
    }, {
        xtype: 'actioncolumn',
        width: 50,
        menuDisabled: true,
        sortable: false,
        items: [{
            iconCls: 'x-fa fa-check green icon-margin',
            handler: 'onApprove'
        }, {
            iconCls: 'x-fa fa-ban red',
            handler: 'onDecline'
        }]
    }],

    signTpl: '<span style="' +
        'color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}"' +
        '>{text}</span>'
});