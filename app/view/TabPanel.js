Ext.define('Gongzhu.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype : 'princessbody',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.PrincessMenu',
    'Gongzhu.view.NavigationTitle',
    ],
    config:{
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
            layout:'vbox',
            items:[{xtype:'banner'},{
                xtype:'princessmenu'
            }
            ]
        }, {
            title : '收藏',
            iconCls : 'star',
            cls : 'home',
            layout:'fit',
            items:[{ xtype:'navlist'}]
        },
        //this is the new item
        {
            title : '点评',
            iconCls : 'user',
            xtype : 'formpanel',
            url : 'contact.php',
            layout : 'vbox',
        }
        ]
    }

});