casper.test.begin('Starting home tests', 1, function(test){
    casper.start('http://localhost:8080/', function(){
        test.assertEquals(this.getTitle(), 'DevParaná', 'verify page title');
    });

    casper.run(function() {
        test.done();
    });
});