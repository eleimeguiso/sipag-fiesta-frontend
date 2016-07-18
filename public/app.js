'use strict';
(function(){
    angular
        .module("app", ["ngRoute"])
        .config(config);
        
        config.$inject = ["$routeProvider"];
        function config($routeProvider){
            $routeProvider
                .when('/home', {   
                    "controller": "",
                    "templateUrl": "views/home.view.html"
                })
                .when('/categories', {
                    "controller": "ViewCategoriesCtrl",
                    "templateUrl": "views/view-categories.view.html" 
                })
                .when('/:category/commodities', {
                    "controller": "ViewTechnologyListCtrl",
                    "templateUrl": "views/view-technologies-percategory.view.html"
                })
                .when('/commodity/:commodity/technologies', {
                    "controller": "ViewTechnologyListCtrl",
                    "templateUrl": "views/view-technologies-percommodity.view.html"
                })
                .when('/technologies/:id', {
                    "controller": "ViewTechnologyCtrl",
                    "templateUrl": "views/view-technology.view.html"
                })
                .otherwise({"redirectTo": "home"});                  //otherwise = else
        }
})();
