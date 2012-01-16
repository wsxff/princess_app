Ext.define('Gongzhu.view.PrincessCategory', {
    extend: 'Ext.List',
    xtype : 'princesscat',

    config:{

        disclosure: true,
        store: 'CategoryStores',
        itemTpl:"<div class='item_icon'><img src='{icon}' class='category_icon'/></div><div class='item_content'><span class='item_title'>{cat_name}</span><p class='small_title'>共{product_count}款商品</p></div>",
        flex:2,
        onItemDisclosure: function (record) { 
            //main controller 直接判断
        },
        items:[
        {xtype:'header',docked:'top'}],
    }

});