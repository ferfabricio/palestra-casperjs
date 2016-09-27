casper.test.begin('Starting contact tests', 2, function(test) {
    casper.start('http://localhost:8080/', function() {
        this.clickLabel('Camisetas', 'a');
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
                    return document.querySelectorAll('.spinner').length > 0;
                });
            },
            function then() {
                test.assertEval(function() {
                    return __utils__.findOne('div.spinner > p').textContent === 'Sua compra esta sendo processada!';
                });
            },
            function timeout() {
                test.comment('the selector is not in the screen');
            },
            10000
        );
    });

    casper.then(function() {
        casper.waitForSelector(
            '#venda > div.alert-success',
            function then() {
                test.assertEval(function() {
                    return __utils__.findOne('div.alert-success').textContent === 'Compra realizada com sucesso! Aguarde nosso contato';
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