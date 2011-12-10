
Ext.define('Gongzhu.model.FocusPic', {
    extend: 'Ext.data.Model',

    fields: [
    'pic', 'link'
    ],

    proxy: {        type: 'jsonp',
    url : 'http://blog.dreamlx.net/test.php'
}
});