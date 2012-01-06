Ext.define('Gongzhu.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype : 'bootomtabs',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.PrincessMenu',
    'Gongzhu.view.NavigationTitle',
    ],
    config:{
        scrollable :false,
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        
        items : [
        {

            title : '首页',
            iconCls : 'home',
            cls : 'home',
       
        }, {
            title : '收藏',
            iconCls : 'star',
            cls : 'home',
        
           
        },
        //this is the new item
        {
            title : '点评',
            iconCls : 'user',
            xtype : 'formpanel',
        
        }
        ]
    },
   

});