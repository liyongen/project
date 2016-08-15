/**
 * Created by Administrator on 16-8-5.
 */



//创建一个模块
var myapp=angular.module("myapp",["ionic"]);
//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    });
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,//抽象的，不至于一刷新是空白页
        templateUrl:"views/tabs/tabs.html"

    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{
            templateUrl:"views/home/home.html",
            controller:"homeCtrl"
        }}
    });

    //默认路由
    $urlRouterProvider.otherwise("/tabs/home");
});

