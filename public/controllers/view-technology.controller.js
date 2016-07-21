'use strict';

(function(){
    angular
        .module("app")
        .controller("ViewTechnologyCtrl", function($scope, $routeParams, CommodityService, TechnologyService, ObjectiveService, BenefitService, BeneficiaryService, LocationService, PartnerService, ImageService) { 
            $scope.commodities = [];
            $scope.technologies = [];

            $(document).ready(function(){
              $(".button-collapse").sideNav();
            });

            CommodityService.getCommodities()
              .then(function(data){
                $scope.commodities = data.data.items;
              });

            TechnologyService.getTechnologies()
              .then(function(data){
                $scope.technologies = data.data.items;
              });

            $scope.currentTechnology = $routeParams.id;
            $scope.objectives = [];
            $scope.benefits = [];
            $scope.beneficiaries = [];
            $scope.locations = [];
            $scope.partners = [];
            $scope.images = [];
 
            TechnologyService.getOneTechnology($scope.currentTechnology)
              .then(function(technology) {
                $scope.technology = technology.data.items[0];
              });

            ObjectiveService.getObjectives($scope.currentTechnology)
              .then(function(data){
                $scope.objectives = data.data.items;
              });

            BenefitService.getBenefits($scope.currentTechnology)
              .then(function(data){
                $scope.benefits = data.data.items;
              });

            BeneficiaryService.getBeneficiaries($scope.currentTechnology)
              .then(function(data){
                $scope.beneficiaries = data.data.items;
              });

            LocationService.getLocations($scope.currentTechnology)
              .then(function(data){
                $scope.locations = data.data.items;
              });

            PartnerService.getPartners($scope.currentTechnology)
              .then(function(data){
                $scope.partners = data.data.items;
              });

            ImageService.getImages($scope.currentTechnology)
              .then(function(data){
                $scope.images = data.data.items;
              });

        })
        .directive('matBox', function() {
          return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function() {
                $('.materialboxed').materialbox();
                $('.collapsible').collapsible({
                  accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                });
                $("div.HeaderPanel").toggle(
                function() {
                    $(this).next("div.ContentPanel").show("slow");
                },
                function() {
                    $(this).next("div.ContentPanel").hide("slow");
                });
            }
           };
        });

})();