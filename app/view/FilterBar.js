
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
        docked:'top',
        items: [
        {
            xtype: 'selectfield',
            label:'口碑',
            name:'filter_star',
            prependText: '全部',
            options: [
            {text: '5星评论',  value: '5'},
            {text: '4星评论',  value: '4'},
            {text: '3星评论',  value: '3'},
            {text: '2星评论',  value: '2'},
            {text: '1星评论',  value: '1'}
            ], 
        },
        {xtype: 'spacer'},
        {//0-99元/100元-199元/200-399元/400元以上
            xtype: 'selectfield',
            label:'价格',
            prependText: '全部',
            name:'filter_price',
            options: [
            {text: '0-99元',  value: '99'},
            {text: '100元-199元', value: '199'},
            {text: '200-399元',  value: '399'},
            {text: '400元以上',  value: '400'}
            ],
        },
        {xtype: 'spacer'},
        {
            xtype: 'selectfield',
            label:'品牌',
            prependText: '全部',
            name:'filter_brand',
            store: 'BrandStores',
            displayField: 'chname',
            valueField: 'brand_id',

        }
        ]
    }
});
