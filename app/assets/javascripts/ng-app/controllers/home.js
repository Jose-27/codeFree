    
    app.controller('HomeCtrl',['$scope','$location', function ($scope, $location) {
        $scope.showSearch = $location.path() === '/';
    }]);