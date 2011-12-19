Ext.define('Gongzhu.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype : 'princessbody',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.PrincessList',
    ],
    config:{
        tabBarPosition : 'bottom',

        items : [
        {

            title : '首页',
            iconCls : 'home',
            layout:'vbox',
            items:[{
                xtype:'banner'
            },{
                xtype:'princesslist'
            }]
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
            url : 'contact.php',
            layout : 'vbox',
        }
        ]
    }

});