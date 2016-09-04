/**
 * Created by hxsd on 2016/7/28.
 */

angular.module("myapp")
    .constant("ac","btn-primary")
    .controller("productListController",function($scope,ac,shopcart){//shopcart依赖购物车对象注入，$scope依赖angularjs对象注入
   //声明一个变量来保存当前用户选中的商品类别
    $scope.selectedCategory=null;

    //就是选中那些类别，首页，相当于全部选着商品
    $scope.selectCategory=function(category){
        //保存当前选中的商品类别
        $scope.selectedCategory=category;
        //$scope.selectedCategory=null是首页，全部显示
    };

    //过滤函数，单击某个类别的只显示某个类别的
    $scope.showByCategory=function(product){
        //要么用户选择的是首页即$scope.selectedCategory=null

        //要么用户选择某个类别，显示属于这个类别的product才显示
        return $scope.selectedCategory==null || $scope.selectedCategory==product.category;
    };


    //函数，点击那个类别时，那个类显示高亮颜色
    $scope.getActiveClass=function(category){

        return category==$scope.selectedCategory?ac:"";
    };

    //分页数据
    $scope.currentPage=1;//当前显示的页码
    $scope.pageSize=3;//一页显示多少数量商品



    //选择分页
    $scope.selectPage=function(page){
        $scope.currentPage=page;

    };

    //高亮导航分页按钮
    $scope.getActiveNavClass=function(page){
        return page==$scope.currentPage?ac:"";
    };

    //添加购物车的响应函数
    $scope.addToCart=function(product){
        shopcart.add(product);//将商品加入到购物车
    };


});






