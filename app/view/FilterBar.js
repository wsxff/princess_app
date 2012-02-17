
/*
todo:
ui 需要在scss中指定

@include sencha-toolbar-ui('filter_bar', #58710D, 'glossy');

selectfield ui
toolbar ui
*/
Ext.define('Gongzhu.view.FilterBar', {
    extend: 'Ext.Toolbar',
    xtype : 'filterbar',

    config: {
        //ui:'filter_bar',

        layout: 'hbox',
        items: [
        {
            xtype: 'selectfield',
            label:'口碑',
            name:'stars',
            id:"filter_stars",
            placeHolder : '全部',
            options: [
            {text: '全部',  value: '0'},
            {text: '5星评论',  value: '5'},
            {text: '4星评论',  value: '4'},
            {text: '3星评论',  value: '3'},
            {text: '2星评论',  value: '2'},
            {text: '1星评论',  value: '1'}
            ],
            listeners: {     
                change:function(){ dofilter()
                }       
            } 
        },
        {xtype: 'spacer'},
        {//0-99元/100元-199元/200-399元/400元以上
            xtype: 'selectfield',
            label:'价格',
            id:'filter_price',
            name:'price',
            placeHolder : '全部',
            options: [
            {text: '全部',  value: '0'},
            {text: '0-99元',  value: '99'},
            {text: '100元-199元', value: '199'},
            {text: '200-399元',  value: '399'},
            {text: '400元以上',  value: '400'}
            ],
            listeners: {     
                change:function(){ dofilter()
                }       
            }
        },
        {xtype: 'spacer'},
        {
            xtype: 'selectfield',
            label:'品牌',
            id:'filter_brand',
            placeHolder : '全部',
            name:'brand_id',
            store: 'BrandStores',
            displayField: 'chname',
            valueField: 'brand_id',
            listeners: {     
                change:function(){ dofilter()
                }       
            }
        }
        ],

    }
});
/*private 
todo: price 价格需要服务器处理
*/
function dofilter(){
    var brand = Ext.getCmp('filter_brand').getValue();
    var stars = Ext.getCmp('filter_stars').getValue();
    var price = Ext.getCmp('filter_price').getValue();
    var store = Ext.getCmp('p_list').getStore();
    store.getProxy().extraParams.bid = brand;
    store.getProxy().extraParams.stars = stars;
    store.getProxy().extraParams.price = price;
    store.read();
    store.load();

};
