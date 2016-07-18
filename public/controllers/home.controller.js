'use strict';

(function(){
    angular
        .module("app")
        .controller("HomeCtrl", function($scope, CategoryService, CommodityService) {
            $scope.categories = [];
            $scope.commodities = [];

            CategoryService.getCategories()
              .then(function(categories) {
                $scope.categories = categories.data.items;
              });
           
            CommodityService.getCommodities()
              .then(function(commodities) {
                $scope.commodities = commodities.data.items;
              });

        });

})();