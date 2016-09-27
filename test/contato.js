casper.test.begin('Starting contact tests', 2, function(test) {
    casper.start('http://localhost:8080/contato.html', function() {
        test.assertDoesntExist('.alert-success', 'the success message cannot be on the screen');
    });

    casper.then(function() {
        casper.waitForSelector(
            '.btn-success',
            function() {
                this.click('.btn-success');
            }
        );
    });

    casper.then(function() {
        casper.waitFor(
            function check() {
                return this.evaluate(function() {
                    return document.querySelectorAll('#messages > div').length > 0;
                });
            },
            function then() {
                test.assertEval(function() {
                    return __utils__.findOne('#messages > div').textContent === 'Sua mensagem foi enviada com sucesso!';
                });
            },
            function timeout() {
                test.comment('the selector is not in the screen');
            },
            10000
        );
    });

    casper.run(function() {
        test.done();
    });
});