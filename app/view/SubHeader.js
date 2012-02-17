Ext.define('Gongzhu.view.SubHeader', {
    extend: 'Ext.Toolbar',
    xtype : 'subheader',
    id:'subheaderbar',
    config:{
    
        layout: 'hbox',
title: '公主网',
        items: [
        {
            text:'返回',
            ui:'back',
            id:'ReturnBtn'
        }
        ]
    }


});