angular.module('otsConfApp').controller('BookDetailsCtrl', function($scope) {
    $scope.book = {
        title: 'KnockoutJS for Beginners',
        author: 'baz',
        numPages: 200,
        isbn: '222-222-222'
    };
});