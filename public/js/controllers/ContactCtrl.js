angular.module('ContactCtrl', []).controller('ContactController', function($scope, $http) {

    $scope.emailSuccess = false;
    $scope.emailError = false;

    $scope.submit = function () {

        $('.loading-overlay').css('width', '100%');

        var formData = {
            'nameInput': $('#nameInput').val(),
            'emailInput': $('#emailInput').val(),
            'messageInput': $('#messageInput').val()
        };

        $http({
            method: 'POST',
            url: '/api/sendemail',
            data: formData,
        }).then(function successCallback(response) {

            if (response.data.success) {
                $scope.emailSuccess = true;
                $scope.emailError = false;

                $('#nameInput').prop('value', '');
                $('#emailInput').prop('value', '');
                $('#messageInput').prop('value', '');
            } else {
                $scope.emailError = true;
                $scope.emailSuccess = false;
            }

            $('.loading-overlay').css('width', '0');
        }, function errorCallback(response) {

            $scope.emailError = true;
            $scope.emailSuccess = false;

            $('.loading-overlay').css('width', '0');
        });
    }

});
