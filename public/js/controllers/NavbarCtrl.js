angular.module('NavbarCtrl', []).controller('NavbarController', function($scope, $location) {
    
    $scope.isActivePage = function(path) {
        return $location.path() == path;
    }
});
