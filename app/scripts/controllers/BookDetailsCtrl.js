angular.module('otsConfApp').controller('BookDetailsCtrl', function($scope, $routeParams, bookDataService) {
    var isbn = $routeParams.isbn;
    $scope.book = bookDataService.getBookByIsbn(isbn);
});