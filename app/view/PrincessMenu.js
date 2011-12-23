Ext.define('Gongzhu.view.PrincessMenu', {
    extend: 'Ext.List',
    xtype : 'princessmenu',
    requires: [
    'Gongzhu.view.PrincessCategory',

    ],
    config:{

        disclosure: true,
        store: 'MenuStores',
        itemTpl:"<img src='{icon}' width=35 height=35/>{title}{etitle}<br/><small>{desc}</small>",
        flex:2,
        onItemDisclosure: function (record) { 
            var pcat = Ext.create('Gongzhu.view.PrincessCategory');
            pcat.show();
        }

    }

});