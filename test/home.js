casper.test.begin('Starting home tests', 3, function(test){
    casper.start('http://localhost:8080/', function(){
        test.assertHttpStatus(200, 'verify http status');
        test.assertEquals(this.getTitle(), 'DevParaná', 'verify page title');
        this.captureSelector('capture/home.png', 'body');
    });

    casper.then(function(){
        test.assertEval(function() {
            console.log(__utils__);
            return __utils__.findAll("body > nav > div > div > ul > li").length === 4;
        }, "4 menu entries");
    });

    casper.run(function() {
        test.done();
    });
});