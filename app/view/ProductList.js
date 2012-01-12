Ext.define('Gongzhu.view.ProductList', {
    extend: 'Ext.List',
    xtype : 'productlist',
    id:"p_list",
    requires: [
    'Gongzhu.view.SearchBar',

    ],
    config:{

        store: 'ProductListStores',
        itemTpl:"<div style='float:left'><img src='{image_url}'/></div><div >{product_name}<br/>stars:{stars},<small>{price}</small>,分类{cat_id},({useds}条点评)</div>",
        items:[
        {xtype:'searchbar',docked:'top'}],
    }

});