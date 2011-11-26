Ext.define('Princess.controller.Mains',{
    extend: 'Ext.app.Controller',
    
    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
	views : [
        'Main'
    ],
    refs: [
        {
            ref       : 'main',
            selector  : 'mainview',
            xtype     : 'mainview',
            autoCreate: true
        }
        ],
    init : function(){
    	 
    }
})
