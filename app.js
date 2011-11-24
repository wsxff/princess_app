
Ext.setup({

    glossOnIcon: false,
    onReady: function() {
    	
    	
    	
        Ext.create('Ext.tab.Panel', {
            fullscreen: true,
            tabBar: {
                docked: 'bottom',
                layout: {
                    pack: 'center',
                    align: 'center'
                },
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                }
            },
            ui  : 'light',
            html: 'top banner<br>main picture<br>menu list',
            styleHtmlContent: true,
            items: [
                { iconCls: 'home', title: '首页' },
                { iconCls: 'favorites', title: '收藏' },
                 { iconCls: 'comment',  title: '点评' },
                { iconCls: 'more',      title: '更多' }
               
            ]
        });
    }
});