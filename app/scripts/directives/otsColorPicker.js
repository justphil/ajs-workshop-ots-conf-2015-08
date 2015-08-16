// <ots-color-picker></ots-color-picker>
angular.module('otsConfApp').directive('otsColorPicker', function() {

    // DDO (Directive Definition Object)
    return {
        restrict: 'E', // element
        templateUrl: 'templates/directives/otsColorPicker.html',
        // init-r="0" init-g="0" init-b="255"
        scope: {
            r: '=initR',
            g: '=initG',
            b: '=initB',
            updateFn: '&onColorChangeFn'
        },
        link: function(scope) {
            console.log('otsColorPicker created!');

            scope.$watch('[r, g, b]', function() {
                scope.updateFn({
                    red: scope.r, green: scope.g, blue: scope.b
                });
            });
        }
    };

});