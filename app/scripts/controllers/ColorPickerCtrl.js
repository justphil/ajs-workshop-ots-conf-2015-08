angular.module('otsConfApp').controller('ColorPickerCtrl', function($scope) {
    $scope.colorR = 100;
    $scope.colorG = 100;
    $scope.colorB = 100;

    $scope.onColorChange = function(r, g, b) {
        console.log('color changed', r,g,b);
    };
});