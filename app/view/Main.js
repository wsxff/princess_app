Ext.define('Princess.view.Main', {
    extend: 'Ext.Container',
    requires: [
        'Princess.view.PrincessList',
        'Princess.view.BottomTabs'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        items: [
            {
                xtype : 'bottomtabs',
                docked: 'bottom'
            },
            {
                xtype: 'princesspist'
            }
        ]
    }
});