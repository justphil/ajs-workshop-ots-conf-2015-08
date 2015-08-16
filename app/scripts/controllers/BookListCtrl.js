angular.module('otsConfApp').controller('BookListCtrl', function($scope, bookDataService) {
    $scope.books = bookDataService.getAllBooks();
});