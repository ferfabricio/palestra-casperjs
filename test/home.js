casper.test.begin('Starting home tests', 2, function(test){
    casper.start('http://localhost:8080/', function(){
        test.assertEquals(this.getTitle(), 'DevParaná', 'verify page title');
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