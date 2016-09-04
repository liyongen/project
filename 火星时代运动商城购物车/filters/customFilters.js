/**
 * Created by hxsd on 2016/7/28.
 */
//声明一个新的模块，专门管理各种过滤器
var myfilter=angular.module("customFilter",[]);

myfilter.filter("range",function(){
    //products是过滤器前面的那个要过来的数组
    //currentPage要显示的页码
    //pageSize一页要显示的商品数量

    return function(products,currentPage,pageSize){
       //防止客户在网址上面乱输入东西
        if(angular.isArray(products)&&angular.isNumber(currentPage)&&angular.isNumber(pageSize)){
            //计算当前请求的显示商品数量的起始索引值
            var starIndex=(currentPage-1)*pageSize;
            //如果写上的页面如5000页超过了商品的数量，返回空数组
            if(starIndex>=products.length){
                return [];
            }else{
                return products.splice(starIndex,pageSize);//截取一页的商品到底有多少条，就是商品数量
            };
        }else{
            //如果传入的参数有误，则不对原数据做任何处理
            return products;
        };

    };
})


//自定义计算分页导航按钮过滤器，看看有多少个按钮


myfilter.filter("navCount",function(){
    //products参数为数组，pageSize为一页多少商品数量
    return function(products,pageSize){
        if(angular.isArray(products)&&angular.isNumber(pageSize)){
            var navArr=[];//建立一个新数组

            //计算按钮多少
            var navTotal=Math.ceil(products.length/pageSize);   //Math.ceil(2.5)=3往上取值
            for(var i=0;i<navTotal;i++){
                navArr.push(i+1);
            }

            return navArr;//这时候的数组已经是变成【1,2,3,4,5,6----------】
        }else{
            //如果传入的参数有误，则不对原数据做任何处理
            return products;
        };


    };
})



























