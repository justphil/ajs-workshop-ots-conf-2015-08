angular.module('otsConfApp').factory('bookDataService', function($q, $http) {

    // private state
    var _books = [
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

    // private impl.
    function getAllBooks() {
        return $http.get('http://ajs-workshop.herokuapp.com/api/books');

        /*return $q.when({
            data: angular.copy(_books)
        });*/
    }

    function getBookByIsbn(isbn) {
        var filtered = _books.filter(function(book) {
            return isbn === book.isbn;
        });

        if (filtered.length > 0) {
            return filtered[0];
        } else {
            return null;
        }
    }

    // revealing module
    return {
        getAllBooks: getAllBooks,
        getBookByIsbn: getBookByIsbn
    };
});