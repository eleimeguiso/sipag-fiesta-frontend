'use strict';

var apiUrl = 'http://api.sipag-fiesta.loc:8000';

(function(){
    angular
        .module("app")
        .service("CategoryService", function($q, $http) {
            var searchResult = [];

            return {
                getCategories: function() {
                    var deferred = $q.defer();
                    $http.get(apiUrl + '/categories')
                    .success(function(_data) {
                        deferred.resolve(_data);
                    })
                    .error(function(err) {
                        
                    });
                    return deferred.promise;
                },

                getCategory: function(id) {
                    var deferred = $q.defer();
                    $http.get(apiUrl + '/categories/' + id).success(function(_data) {
                        deferred.resolve(_data);
                    });
                    return deferred.promise;
                },                
            }

        });
})();