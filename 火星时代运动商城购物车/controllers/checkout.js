/**
 * Created by hxsd on 2016/7/29.
 */

angular.module("myapp").controller("checkoutCnotroller",function($scope,shopcart){
    $scope.cartData=shopcart.findAll();//�õ����ﳵ�Ĺ��������ע��ͬ�����Ķ��巽��   var cartData=shopcart.findAll();//�õ�һ�����ﳵ

    //���㹺�ﳵ������Ʒ���ܽ��
    $scope.tatalMon=function(){
        var total=0;
        for(var i=0;i<$scope.cartData.length;i++){
            total+=$scope.cartData[i].number*$scope.cartData[i].product.price;
        };
        return total;

    };

    //�ӹ��ﳵ��ɾ��ָ����Ʒ
    $scope.removeFromCart=function(item){
        shopcart.remove(item.product.name);//������Ʒ���ƴӹ��ﳵ��ɾ��
    };

})
























