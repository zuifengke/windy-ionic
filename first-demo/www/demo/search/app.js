var searchApp = angular.module('searchApp', []);

searchApp.factory('ResultsFactory', ['$http', function ($http) {
    return {
        getResults: function (query) {
            return $http.post('/getResults', query);
        }
    };
}]);

searchApp.controller('AppCtrl', ['$scope', 'ResultsFactory', function ($scope, ResultsFactory) {
    $scope.query = '';
    $scope.results = [];
    $scope.search = function () {
        var q = {
            query: $scope.query
        };
        ResultsFactory.getResults(q)
        .then(function (response) {
            $scope.results = response.data.results;
        });
    }
}]);