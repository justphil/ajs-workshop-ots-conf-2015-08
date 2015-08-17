"use strict";

describe('Service bookDataService', function() {

    var bookDataService;

    beforeEach(module('otsConfApp'));

    beforeEach(inject(function(_bookDataService_) {
        bookDataService = _bookDataService_;
    }));

    describe('getAllBooks()', function() {
        it('should be a defined API function', function() {
            expect(bookDataService.getAllBooks).toEqual(jasmine.any(Function));
        });

        it('should return an array', function() {
            var actual = bookDataService.getAllBooks();
            expect(actual).toEqual(jasmine.any(Array));
        });

        it('should return an array containing book objects', function() {
            var actual = bookDataService.getAllBooks();

            actual.forEach(function(book) {
                expect(isValidBook(book)).toBe(true);
            });
        });
    });

    describe('getBookByIsbn()', function() {
        it('should be a defined API function', function() {
            expect(bookDataService.getBookByIsbn).toEqual(jasmine.any(Function));
        });

        it('should return the appropriate book object', function() {
            var isbn = '111-111-111';
            var actual = bookDataService.getBookByIsbn(isbn);
            expect(isValidBook(actual)).toBe(true);
            expect(actual.isbn).toBe(isbn);
        });
    });

    function isValidBook(book) {
        return angular.isDefined(book)
                && angular.isString(book.title)
                && angular.isString(book.author)
                && angular.isString(book.isbn)
                && angular.isNumber(book.numPages);
    }

});