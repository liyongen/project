/**
 * Created by Administrator on 16-8-5.
 */



//����һ��ģ��
var myapp=angular.module("myapp",["ionic"]);
//����·��
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    });
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,//����ģ�������һˢ���ǿհ�ҳ
        templateUrl:"views/tabs/tabs.html"

    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{
            templateUrl:"views/home/home.html",
            controller:"homeCtrl"
        }}
    });

    //Ĭ��·��
    $urlRouterProvider.otherwise("/tabs/home");
});

