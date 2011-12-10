Ext.define('Gongzhu.view.Header', {
    extend: 'Ext.Toolbar',
    xtype : 'header',

		config:{ui: 'searchbar',
        layout: 'vbox',
        
        items: [
            {
                xtype: 'component',
                cls  : 'x-title',
                html : '<h>gongzhu</h>'
            },

        ]
        }


});