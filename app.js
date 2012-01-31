Ext.Loader.setConfig({ enabled: true });
Ext.Loader.setPath('Ext.data.proxy.Princess', 'lib/PrincessProxy.js');
Ext.ClassManager.setAlias('Ext.data.proxy.Princess', 'proxy.princess');
Ext.application({
    name: 'Gongzhu',
autoCreateViewport : true,
    controllers: ['Viewport','PrincessMenu','PrincessBrand','PrincessCategory','ProductList','Product'],
    models     : ['BannerPic','PrincessMenu','PrincessCategory','Brand','Product'],
});
