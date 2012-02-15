Ext.define('Gongzhu.view.DataPicker', {
    extend: 'Ext.field.Text',
    xtype: 'datapicker',
    itemId:'datapicker',
    requires: [
        'Ext.picker',
        'Ext.DateExtras'
    ],
    /*
     * @event change
     */

    config: {
        ui: 'select',

        /**
         * @cfg {Object/Ext.picker.Date} picker
         * An object that is used when creating the internal {@link Ext.picker.Date} component or a direct instance of {@link Ext.picker.Date}
         * Defaults to true
         * @accessor
         */
        picker: true,

        /**
         * @cfg {Boolean}
         * @hide
         * @accessor
         */
        clearIcon: false,

        /**
         * @cfg {Object/Date} value
         * Default value for the field and the internal {@link Ext.picker.Date} component. Accepts an object of 'year',
         * 'month' and 'day' values, all of which should be numbers, or a {@link Date}.
         *
         * Example: {year: 1989, day: 1, month: 5} = 1st May 1989 or new Date()
         * @accessor
         */

        /**
         * @cfg {Boolean} destroyPickerOnHide
         * Whether or not to destroy the picker widget on hide. This save memory if it's not used frequently,
         * but increase delay time on the next show due to re-instantiation. Defaults to false
         * @accessor
         */
        destroyPickerOnHide: false,

        /**
         * @cfg {Number} tabIndex
         * @hide
         */
        tabIndex: -1,

        /**
         * @cfg {Object}
         * @hide
         */
        component: {
            useMask: true
        },
    	loadingText: "加载中...",
    	/**
    	 *picker 要绑定的数据
    	 */
    	store:null,
    	/**
    	 *picker绑定时显示的字段
    	 */
    	displayField:'text',
    	/**
    	 *picker绑定时值的字段
    	 */
    	valueField:'value',
    	
    	detailValue:'',
    	/**
    	 *picker绑定时是否通过jsonp的方式获取数据
    	 */
    	isjson:true
    },
    initialize: function() {
        this.callParent();
        this.getComponent().on({
            scope: this,
            masktap: 'onMaskTap'
        });
    },
	
	//点击Done按钮之后的事件
    applyValue: function(value) {
    	return value;
    },

    // @inherit
    updateValue: function(newValue) {
        var picker = this.getPicker();
        if (this.initialized && picker) {
            picker.setValue(newValue);
        }

        if (newValue !== null) {
        	var pickerStore =  this.getStore();
        	if(this.getIsjson()== true)
        	{
        		pickerStore =  Ext.getStore(pickerStore);
        	}
        	
           if(pickerStore)
           {       	
	        	var selectmodel = pickerStore.findRecord(this.getValueField(),newValue["picker"]);
	        	Ext.Array.each(selectmodel,function(value,key,self,field){
	        		selectmodel = value['data'];
	        	});
	        	var field = this.getDisplayField();
	        	for(var i in selectmodel)
	        	{
	        		if(i == field)
	        		{
	        			this.getComponent().setValue(selectmodel[i]);
	        		}
	        	}
           }
        }
        this._value = newValue;
    },
    getValue: function() {
        var result = this.getDetailValue();
    	return result;
    },

	//创建一个picker
    applyPicker: function(config) {
    	
        if (!this.initialized) {
            //if this field has not been initialized yet, we don't want to create the picker
            //as it will not be shown immeditely. We will hold this off until the first time
            //it needs to be shown
            return null;
        }

      return Ext.factory(config,Ext.picker.Picker, this.getPicker());
    },

    updatePicker: function(newPicker) {
        if (newPicker) {
            newPicker.on({
                scope: this,
                pick: 'onPickerPick',
                change: 'onPickerChange',
                hide  : 'onPickerHide'
            });
            newPicker.hide();
        }
    },
    onPickerPick:function(picker,The,slot,eOpts)
    {
    	
    	/*
    	var pickerfather = The["brand_category"];
		if(pickerfather != this.getPickerfather())
    	{  		
			var brandlistStore = Ext.getStore("BrandList");
	        brandlistStore.sort('p_letter', 'ASC');
	        brandlistStore.clearFilter(false);
	
			switch(pickerfather)
			{
				case "hot":
				brandlistStore.filter('is_hot',1);
				break;
				case "AtoG":
				brandlistStore.filter('p_letter',/A|B|C|D|E|F|G$/);
				break;
				case "HtoL":
				brandlistStore.filter('p_letter',/H|I|J|K|L$/);
				break;
				case "MtoT":
				brandlistStore.filter('p_letter',/M|N|O|P|Q|R|S|T$/);
				break;
				case "UtoZ":
				brandlistStore.filter('p_letter',/U|V|W|X|Y|Z$/);
				break;
			} 
			
			var arrayslot =   [{
		        name : 'brand_detail',
	    	    store: brandlistStore,
				valueField  : "p_id",
				displayField:"p_name",
				
	        }];
	        
	        picker.removeAt(2);
		  	picker.add(arrayslot);
		  	this.setPickerfather(pickerfather);
		}*/
    },
    onPickerAdd:function(picker)
    {
    	var pickerStore = this.getStore();
        var arrayslot =   [{
                name : 'picker',
                store:pickerStore,
                valueField  : this.getValueField(),
			    displayField:this.getDisplayField(),
            }];
        
        picker.setSlots(arrayslot);
		picker.setDoneButton("完成");
		picker.setCancelButton("取消");
	    return picker;
	    
    },

    /**
     * @private
     * Listener to the tap event of the mask element. Shows the internal {@link #datePicker} component when the button has been tapped.
     */
    onMaskTap: function(config) {
        var picker = this.getPicker(),
        initialConfig = this.getInitialConfig();
        if (!picker) {
            picker = this.applyPicker(initialConfig.picker);
            picker = this.onPickerAdd(picker);
            this.updatePicker(picker);
            picker.setValue(initialConfig.value);
            this._picker = picker;
        }
        picker.show();
        return false;
    },

    /**
     * Called when the picker changes its value
     * @param {Ext.picker.Date} picker The date picker
     * @param {Object} value The new value from the date picker
     * @private
     */
    onPickerChange: function(picker, value) {
        var me = this;
        me.setValue(value);
        me.fireEvent('change', me, me.getValue());
    },

    /**
     * Destroys the picker when it is hidden, if
     * {@link Ext.field.DatePicker#destroyPickerOnHide destroyPickerOnHide} is set to true
     * @private
     */
    onPickerHide: function() {
    	
        var picker = this.getPicker();

        if (this.getDestroyPickerOnHide() && picker) {
            picker.destroy();
            this.setPicker(null);
        }
    },

    // @private
    onDestroy: function() {
    	
        var picker = this.getPicker();
        if (picker) {
            picker.destroy();
        }

        this.callParent(arguments);
    }
}, 
function() {
    //<deprecated product=touch since=2.0>
    this.override({
       getValue: function() {
          	alert('getvalue重写成功')
            return this.callOverridden();
        }
    });
    //</deprecated>
});
