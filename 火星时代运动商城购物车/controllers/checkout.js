/**
 * Created by hxsd on 2016/7/29.
 */

angular.module("myapp").controller("checkoutCnotroller",function($scope,shopcart){
    $scope.cartData=shopcart.findAll();//拿到购物车的购物框数组注意同这样的定义方法   var cartData=shopcart.findAll();//拿到一个购物车

    //计算购物车所有商品的总金额
    $scope.tatalMon=function(){
        var total=0;
        for(var i=0;i<$scope.cartData.length;i++){
            total+=$scope.cartData[i].number*$scope.cartData[i].product.price;
        };
        return total;

    };

    //从购物车中删除指定商品
    $scope.removeFromCart=function(item){
        shopcart.remove(item.product.name);//根据商品名称从购物车中删除
    };

})
























