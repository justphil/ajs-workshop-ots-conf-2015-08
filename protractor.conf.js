exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        'book-list': 'test/e2e/book-list/*.spec.js',
        'gisa-book-list': 'test/e2e/gisa-book-list/*.spec.js'
    },
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }]
};