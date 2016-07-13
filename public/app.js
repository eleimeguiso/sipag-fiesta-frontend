'use strict';
(function(){
    angular
        .module("app", ["ngRoute"])
        .config(config);
        
        config.$inject = ["$routeProvider"];
        function config($routeProvider){
            $routeProvider
                .when('/home', {                                        //when = if
                    "controller": "HomeCtrl",
                    "templateUrl": "view/home.view.html"
                })
                .when('/technologies', {
                    "controller": "TechnologiesCtrl",
                    "templateUrl": "view/technologies.view.html"
                })
                .otherwise({"redirectTo": "home"});                  //otherwise = else
        }
})();
