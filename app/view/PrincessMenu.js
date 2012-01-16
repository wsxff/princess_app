
Ext.define('Gongzhu.view.PrincessMenu', {
    extend: 'Ext.List',
    xtype : 'princessmenu',
    id:'princess_menu',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.PrincessCategory',
    'Gongzhu.view.PrincessBrand',
    ],
    config:{

        disclosure: true,
        store: 'MenuStores',
       
        itemTpl:"<div class='item_icon'><img src='{icon}' class='menu_icon'/></div><div class='item_content'><span class='item_title'>{title}</span><span class='item_title'>{etitle}</span><p class='small_title'>{desc}</p></div>",
        flex:1,
        onItemDisclosure: function (record) { // TODO: Render the selected 

        },    
    }

});

function strContains(str, sub){  
    return (str.indexOf(sub) != -1);  
}