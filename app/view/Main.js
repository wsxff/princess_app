
Ext.define('Gongzhu.view.Main', 
{
    extend: 'Ext.Container',
    requires: [
    'Gongzhu.view.Header',
    'Gongzhu.view.TabPanel',

    ],
    config: {
        fullscreen: true,
        layout: 'card',
        animation:'slide',
        items: [

            {
                xtype:'header',
                docked:'top'
            },
            {
                xtype:'bootomtabs'
            }

            ]
        }

    }
);



