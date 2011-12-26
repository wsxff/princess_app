Ext.define('Gongzhu.view.PrincessMenu', {
    extend: 'Ext.List',
    xtype : 'princessmenu',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.PrincessCategory',
    'Gongzhu.view.PrincessBrand',
    ],
    config:{
        layout: 'card',
        disclosure: true,
        store: 'MenuStores',
        itemTpl:"<div style='float:left'><img src='{icon}' width=35 height=35/></div><div>{title}{etitle}<br/><small>{desc}</small></div>",
        flex:2,
        onItemDisclosure: function (record) { 
            // main controller 


            },items:[{xtype:'banner'}]

        }

    });

    function strContains(str, sub){  
        return (str.indexOf(sub) != -1);  
    }