'use strict';

(function(){
    angular
        .module("app")
        .controller("ViewTechnologyListCtrl", function($scope, $routeParams, TechnologyService) {
            
            $scope.technologiesPerCommodity = [];       
            $scope.currentCommodity = $routeParams.commodity;
           
            TechnologyService.getTechnologiesPerCommodity($scope.currentCommodity)
              .then(function(data) {
                $scope.technologiesPerCommodity = data.data.items;
                $scope.firstTechInCommodity = data.data.items[0];
                console.log($scope.firstTechInCommodity);
              });


            $scope.technologiesPerCategory = []; 
            $scope.currentCategory = $routeParams.category;

            TechnologyService.getTechnologiesPerCategory($scope.currentCategory)
              .then(function(data) {
                $scope.technologiesPerCategory = data.data.items;
                $scope.firstTechInCategory = data.data.items[0];
                console.log($scope.firstTechInCategory);
              });

        });

})();