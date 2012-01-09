Ext.define('Gongzhu.view.ProductList', {
    extend: 'Ext.List',
    xtype : 'productlist',
    id:"p_list",
    requires: [
    'Gongzhu.view.SearchBar',

    ],
    config:{

        store: 'ProductListStores',
        itemTpl:"<div style='float:left'><img src='{icon}'/></div><div >{product_name}<br/><small>{price}</small>,stars:{stars},{attribute}点评{useds}</div>",
        flex:2,

        items:[
        {xtype:'searchbar',docked:'top'}],
    }

});