/**
 * Created by hxsd on 2016/8/4.
 */

angular.module("myapp")
    .controller("tourCtrl", function ($scope, $ionicSlideBoxDelegate) {
       $scope.isShow=false;//一开始为false不显示

        $scope.onSlideChanged=function(){
            //判断当前幻灯片的索引是不是最后一个

            if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
                $scope.isShow=true;
            }else{
                $scope.isShow=false;
            };

        };



    });






