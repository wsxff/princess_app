Ext.define('Gongzhu.store.BannerPicStores', {
    extend  :'Ext.data.Store',
    model: 'Gongzhu.model.BannerPic',
    requires: ['Gongzhu.model.BannerPic'],
    proxy: {
           type: 'jsonp',
           url : 'http://sns.gongzhu.com/index/get_banner.json'
       },
       autoLoad    : true,
});