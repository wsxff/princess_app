
Ext.define('Gongzhu.model.FocusPic', {
    extend: 'Ext.data.Model',

    fields: [
'pic', 'link'
    ],
    
    proxy: {        type: 'jsonp',
    url : 'http://sns.gongzhu.com/index/get_banner.json'
}
});