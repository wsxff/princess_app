
Ext.define('Gongzhu.view.PrincessMenu', {
    extend: 'Ext.List',
    xtype : 'princessmenu',
    id:'princess_menu',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.Header',
    ],
    config:{

        disclosure: true,
        store: 'MenuStores',
        items: [

            {
                xtype:'header',
                docked:'top'
            },
            {
                xtype:'banner'
            }

            ],
        itemTpl:"<div class='item_icon'><img src='{icon}' class='menu_icon'/></div><div class='item_content'><span class='item_title'>{title}</span><span class='item_title'>{etitle}</span><p class='small_title'>{desc}</p></div>",

    }

});

function strContains(str, sub){  
    return (str.indexOf(sub) != -1);  
}