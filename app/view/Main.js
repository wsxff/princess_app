Ext.define('Kiva.view.Main', {
    extend: 'Ext.Container',


    config: {
        fullscreen: true,
        layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Users',
                    html : 'List of users will go here'
                }
            ]
    }
});