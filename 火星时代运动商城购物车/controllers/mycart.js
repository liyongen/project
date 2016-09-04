/**
 * Created by hxsd on 2016/7/29.
 */

//����һ����ģ��
var mycart = angular.module("mycart", []);

//����ģ���У�����һ�����еķ������-----���ﳵ����
//ʹ��angular��factory����������shopcart������ǹ��ﳵ������
mycart.factory("shopcart", function () {



        // ����һ������ - �൱�ڹ��ﳵ�еĹ����
         var cart = [];

         // ����һ�����ﳵ����
         //var shopCart = {


        return  {
        // �����Ʒ�����ﳵ
        add: function (product) {
            // �������Ʒʱ���ȿ������ﳵ����û�и���Ʒ
            var flag = false;//�൱��һ������
            for (var index = 0; index < cart.length; index++) {
                if (cart[index].product.name == product.name) {
                    flag = true;
                    // ��ʱ˵�����ﳵ��ԭ���Ѿ����˸���Ʒ������Ҫ�����ǽ�����Ʒ������+1
                    cart[index].number += 1;
                    break;
                }
            }

            // ������ﳵ��ԭ��û�и���Ʒ
            if (!flag) {
                var item = {product: product, number: 1}; // ����һ��item��
                cart.push(item);        // ����item���빺�ﳵ
            }
        },


        // �޸Ĺ��ﳵ��ĳ��ָ����Ʒ������
        update: function () {

        },


        // �ӹ��ﳵ��ɾ��ָ����Ʒ
        remove: function (name) {
            for (var index = 0; index < cart.length; index++) {
                if (cart[index].product.name == name) {
                    // ˵���ҵ���Ҫɾ������Ʒ
                    cart.splice(index, 1);
                    break;
                }
            }
        },
            

        // �鿴���ﳵ
        findAll: function () {
            return cart;
        },


        // ��չ��ﳵ
        clear: function () {
            cart.length = 0;
        }
    };

    //return shopCart;
});


//ע��һ��������
mycart.controller("cartcontroller",function($scope,shopcart){
    var cartData=shopcart.findAll();//�õ�һ�����ﳵ


    //���㹺�ﳵ��Ʒ��������
    $scope.totalNumber=function(){
        var total=0;
        for(var i=0;i<cartData.length;i++){
            total+=cartData[i].number;
        };
        return total;

    };

    //���㹺�ﳵ��Ʒ���ܽ��
    $scope.totalMoney=function(){
        var total=0;
        for(var i=0;i<cartData.length;i++){
            total+=cartData[i].number*cartData[i].product.price;
        };
        return total;

    };


});




























