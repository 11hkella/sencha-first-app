


Ext.define('FormPrac.view.main.BasicGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'array-grid',
    // controller: 'basicgrid',

    requires: [
        'Ext.grid.column.Action'
    ],

    title: 'Basic Grid',
    width: 750,
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
        text: 'Company',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Price',
        width: 95,
        formatter: 'usMoney',
        dataIndex: 'price'
    }, {
        text: 'Change',
        width: 80,
        renderer: 'renderChange',
        dataIndex: 'priceChange'
    }, {
        text: '% Change',
        width: 100,
        renderer: 'renderPercent',
        dataIndex: 'priceChangePct'
    }, {
        text: 'Last Updated',
        width: 115,
        formatter: 'date("m/d/Y")',
        dataIndex: 'priceLastChange'
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