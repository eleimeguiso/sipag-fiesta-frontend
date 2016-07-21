'use strict';

(function(){
    angular
        .module("app")
        .controller("ViewCategoriesCtrl", function($scope, CategoryService, CommodityService, TechnologyService) {
            $scope.categories = [];
            $scope.commodities = [];
            $scope.technologies = [];

            $(document).ready(function(){
              $('.slider').slider({full_width: true});
            });

            CategoryService.getCategories()
              .then(function(categories) {
                $scope.categories = categories.data.items;
              });
           
            CommodityService.getCommodities()
              .then(function(commodities) {
                $scope.commodities = commodities.data.items;
              });



            TechnologyService.getTechnologies()
              .then(function(technologies) {
                $scope.technologies = technologies.data.items;
              });

        });

})();