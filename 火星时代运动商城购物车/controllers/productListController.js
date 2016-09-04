/**
 * Created by hxsd on 2016/7/28.
 */

angular.module("myapp")
    .constant("ac","btn-primary")
    .controller("productListController",function($scope,ac,shopcart){//shopcart�������ﳵ����ע�룬$scope����angularjs����ע��
   //����һ�����������浱ǰ�û�ѡ�е���Ʒ���
    $scope.selectedCategory=null;

    //����ѡ����Щ�����ҳ���൱��ȫ��ѡ����Ʒ
    $scope.selectCategory=function(category){
        //���浱ǰѡ�е���Ʒ���
        $scope.selectedCategory=category;
        //$scope.selectedCategory=null����ҳ��ȫ����ʾ
    };

    //���˺���������ĳ������ֻ��ʾĳ������
    $scope.showByCategory=function(product){
        //Ҫô�û�ѡ�������ҳ��$scope.selectedCategory=null

        //Ҫô�û�ѡ��ĳ�������ʾ�����������product����ʾ
        return $scope.selectedCategory==null || $scope.selectedCategory==product.category;
    };


    //����������Ǹ����ʱ���Ǹ�����ʾ������ɫ
    $scope.getActiveClass=function(category){

        return category==$scope.selectedCategory?ac:"";
    };

    //��ҳ����
    $scope.currentPage=1;//��ǰ��ʾ��ҳ��
    $scope.pageSize=3;//һҳ��ʾ����������Ʒ



    //ѡ���ҳ
    $scope.selectPage=function(page){
        $scope.currentPage=page;

    };

    //����������ҳ��ť
    $scope.getActiveNavClass=function(page){
        return page==$scope.currentPage?ac:"";
    };

    //��ӹ��ﳵ����Ӧ����
    $scope.addToCart=function(product){
        shopcart.add(product);//����Ʒ���뵽���ﳵ
    };


});






