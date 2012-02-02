Ext.define('Gongzhu.view.ProductList', {
    extend: 'Ext.List',
    xtype : 'productlist',
    id:"p_list",
    requires: [
    'Gongzhu.view.FilterBar',

    ],
    config:{
        items:[
        {xtype:'filterbar'}],
        store: 'ProductListStores',
        itemTpl:"<div style='float:left'><img src='{image_url}'/></div><div >{product_name}<br/>stars:{stars},<small>{price}</small>,分类{cat_id},({useds}条点评)</div>",

    }

});