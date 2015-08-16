angular.module('otsConfApp').config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/routes/colorPicker.html',
        controller: 'ColorPickerCtrl'
    }).when('/books/:isbn', {
        templateUrl: 'templates/routes/bookDetails.html',
        controller: 'BookDetailsCtrl'
    }).when('/books', {
        templateUrl: 'templates/routes/bookList.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/'
    });

});