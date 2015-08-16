angular.module('otsConfApp').controller('BookListCtrl', function($scope) {
    $scope.books = [
        {
            title: 'AngularJS for Beginners',
            author: 'foo',
            numPages: 123,
            isbn: '111-111-111'
        },
        {
            title: 'EmberJS for Beginners',
            author: 'bar',
            numPages: 321,
            isbn: '222-222-222'
        },
        {
            title: 'KnockoutJS for Beginners',
            author: 'baz',
            numPages: 200,
            isbn: '333-333-333'
        }
    ];
});