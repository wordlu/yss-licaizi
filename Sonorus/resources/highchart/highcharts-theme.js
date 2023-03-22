Highcharts.theme = {
    plotOptions: {
        map: {
            nullColor: '#fcfefe'
        }
    },
    navigator: {
        maskFill: 'rgba(170, 205, 170, 0.5)',
        series: {
            color: '#95C471',
            lineColor: '#35729E'
        }
    }
};
var chartTheme=null;
Ext.Ajax.request({//主题配色
	url:"../idcModule/getChartTheme",
	method : "post",
	async:false,
    success : function(response) {
    	 chartTheme= response.responseText;
    	 var flag=true;
    },
    failure:function(a,b){
    	sofa.error("获取主题配色失败！");
    }
});
//后台未配置颜色系，默认使用系统颜色 2019/01/11 maguiyuan
if(chartTheme == "" || chartTheme == undefined || chartTheme == null||chartTheme == "null")
	chartTheme = Highcharts.getOptions().colors;
if(null!=chartTheme && chartTheme!=''){
	//var chartTheme = new Array();//筛选出的组合集合
	chartTheme=chartTheme.split(',');
	Highcharts.theme.colors=chartTheme;
}
 
 
Highcharts.setOptions(Highcharts.theme);
