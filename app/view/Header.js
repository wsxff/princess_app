Ext.define('Gongzhu.view.Header', {
    extend: 'Ext.Toolbar',
    xtype : 'header',
    id:'headerbar',
    config:{
    
        layout: 'vbox',

        items: [
        {
            xtype: 'component',
            cls  : 'x-title',
            html : '<h>gongzhu</h>'
        }
        ]
    }


});