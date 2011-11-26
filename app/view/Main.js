Ext.define('Gongzhu.view.Main', {
    extend: 'Ext.Container',
    requires: [
        'Gongzhu.view.PrincessList',
        'Gongzhu.view.BottomTabs'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        items: [
            {
 html: [
                        '更多'
                    ].join("")
            }
    
        ]
    }
});

