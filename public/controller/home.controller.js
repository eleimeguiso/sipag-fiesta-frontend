'use strict';

(function(){
    angular
        .module("app")                          //name of module
        .controller("HomeCtrl", function($scope, CategoryService) {
            $scope.categories = [];
            CategoryService.getCategories().then(function(data) {
                $scope.categories = data.data.items;
            });
                
        });
        
/*        HomeCtrl.$inject = ["$scope"];          //list all dependencies, enclosed by [] because there can be many parameters
       */
})();