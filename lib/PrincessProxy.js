
Ext.define('Ext.data.proxy.Princess', {
    extend: 'Ext.data.proxy.JsonP',

    url: 'http://sns.gongzhu.com/viewtype/get_catalog.json',
    extraParams: {  
              id: ''
          }
});