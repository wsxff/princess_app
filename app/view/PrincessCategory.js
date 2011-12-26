Ext.define('Gongzhu.view.PrincessCategory', {
    extend: 'Ext.List',
    xtype : 'princesscat',

    config:{
        
        disclosure: true,
        store: 'CategoryStores',
        itemTpl:"<div style='float:left'><img src='{icon}' width=35 height=35 /></div><div >{cat_name}<br/><small>共{product_count}款商品</small></div>",
        flex:2,
        onItemDisclosure: function (record) { 
            //main controller 直接判断
        },
        items:[
        {xtype:'header',docked:'top'},
        {
            xtype:'bootomtabs',
            docked:'bottom'
        }],
    }

});