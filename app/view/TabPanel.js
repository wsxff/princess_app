Ext.define('Gongzhu.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype : 'bootomtabs',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.PrincessCategory',
    'Gongzhu.view.PrincessBrand',
    'Gongzhu.view.PrincessMenu',
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
            layout:'vbox',
            items:[{xtype:'banner'},{xtype:'princessmenu'}]
        }, {
            title : '收藏',
            iconCls : 'star',
            cls : 'home',
           html:"test2"
        },
        //this is the new item
        {
            title : '点评',
            iconCls : 'user',
           
        
        },
        {
            title : '更多',
            iconCls : 'more',
            
        
        }
        ]
    },
   

});