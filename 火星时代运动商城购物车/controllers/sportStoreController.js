/**
 * Created by hxsd on 2016/7/28.
 */

angular.module("myapp")
    .constant("categoryUrl","json/categories.json")//"categoryUrl"要加上双引号
    .constant("productUrl","json/products.json")
    .constant("orderUrl","json/order.json")
    .controller("sportStoreController",function($scope,$http,$location,categoryUrl,productUrl,orderUrl,shopcart){
        $scope.data={//这一句话不能省
            //categories:[
            //    {id:101,category:"Category #1卫衣"},
            //    {id:102,category:"Category #2外套"},
            //    {id:103,category:"Category #3长袖"},
            //    {id:104,category:"Category #4毛衣"}
            //],
            //products:[
            //    {name:"Product #1卫衣",description:"A product这卫衣外形很像燕子",category:"Category #1卫衣",price:100,imgsrc:"images/TB1_50x50.jpg"},
            //    {name:"Product #1卫衣",description:"A product这卫衣外形很可爱",category:"Category #1卫衣",price:200,imgsrc:"images/TB2_50x50.jpg"},
            //    {name:"Product #1长袖",description:"A product这长袖外形很像外星人",category:"Category #3长袖",price:300,imgsrc:"images/TB3_50x50.jpg"},
            //    {name:"Product #1长袖",description:"A product这长袖外形很像地毯",category:"Category #3长袖",price:400,imgsrc:"images/TB4_50x50.jpg"},
            //
            //
            //    {name:"Product #1卫衣",description:"A product这卫衣外形很像燕子",category:"Category #1卫衣",price:100,imgsrc:"images/TB1_50x50.jpg"},
            //    {name:"Product #1卫衣",description:"A product这卫衣外形很可爱",category:"Category #1卫衣",price:200,imgsrc:"images/TB2_50x50.jpg"},
            //    {name:"Product #1长袖",description:"A product这长袖外形很像外星人",category:"Category #3长袖",price:300,imgsrc:"images/TB3_50x50.jpg"},
            //    {name:"Product #1长袖",description:"A product这长袖外形很像地毯",category:"Category #3长袖",price:400,imgsrc:"images/TB4_50x50.jpg"}
            //

            //]
        };

        //从服务器请求JSON数据，不用模拟数据，data是一个数组参数
       $http.get(categoryUrl).success(function(data){

           $scope.data.categories=data;
       });
        $http.get(productUrl).success(function(data){
            $scope.data.products=data;

        });

        $scope.data.shipping={};//用来保存用户信息

        //发送的订单的方法
        $scope.sendOrder=function(){
            //需要发送的内容：购物车中的购物信息，以及用户们的收货信息
            var order=angular.copy($scope.data.shipping);
            order.products=shopcart.findAll();

            //发送给服务器：$http post 方法
            $http.post(orderUrl,order)
                .success(function(data,status){//data返回一个对象
                    //保存服务端返回的订单号
                    $scope.data.shipping.orderId=data.orderId;

                    //清空购物车
                    shopcart.clear();
                })

                .error(function(data,status){//status服务器有没有传回来数据
                    //保存错误代码
                    $scope.data.shipping.errorStatus=status;// status错误404状态
                })

                .finally(function(){
                    //不管成功提交页面还是发生错误，都会跳转到thankYou.html页面
                    $location.path("complete");
                })




        };



});























