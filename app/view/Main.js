
Ext.define('Gongzhu.view.Main', {
    extend: 'Ext.Container',
    requires: [
    'Gongzhu.view.Header',
    'Gongzhu.view.TabPanel',
    ],
    config: {
        fullscreen: true,
        layout: 'fit',

        items: [

        {
            xtype :'header',
            docked : 'top'
        }, {
            xtype:'princessbody'        
        }

        ]
    }

});



