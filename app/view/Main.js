
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
        animation:'slide',
        items: [
        {
            xtype:'princessmenu' 
        }
        , {
            xtype:'princesscat' 
        }
        
       
        ]
    }

});



