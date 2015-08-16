angular.module('otsConfApp').factory('bookDataService', function() {

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
        return angular.copy(_books);
    }

    // revealing module
    return {
        getAllBooks: getAllBooks
    };
});