angular.module('otsConfApp').controller('BookListCtrl', function($scope, bookDataService) {
    bookDataService.getAllBooks().then(function(response) {
        $scope.books = response.data;
    }).catch(function(error) {
        console.log('error occurred', error);
    });
});