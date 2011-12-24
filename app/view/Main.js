
Ext.define('Gongzhu.view.Main', {
    extend: 'Ext.Container',
    requires: [
    'Gongzhu.view.Header',
    'Gongzhu.view.TabPanel',
    'Gongzhu.view.PrincessCategory',
    
    ],
    config: {
        fullscreen: true,
        layout: 'card',
animation:'Slide',
        items: [

        {
            xtype :'header',
            docked : 'top'
        }, {
            xtype:'princessmenu' 
        }
        , {
            xtype:'princesscat' 
        }
       
        ]
    }

});



