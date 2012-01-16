Ext.define('Gongzhu.model.PrincessCategory', {
    extend: 'Ext.data.Model',
    fields: ['cat_id','cat_name','product_count','icon'],
      proxy: 'princess'
});

/* todo:分类-缺少英文名字输出，现在只有中文*/