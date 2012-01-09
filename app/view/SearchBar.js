
Ext.define('Gongzhu.view.SearchBar', {
    extend: 'Ext.Toolbar',
    xtype : 'searchbar',
    requires: ['Ext.field.Text'],

    config: {
        ui: 'searchbar',
        layout: 'vbox',

        items: [
            {
                xtype: 'title',
                title: 'Search'
            },
            {
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }
        ]
    }
});