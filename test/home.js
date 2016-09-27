casper.start('http://localhost:8080/');

casper.test.begin('Iniciando teste da home', 1, function(test){
    casper.then(function(){
        test.assertEquals('DevParaná', this.getTitle());
    });

    casper.run(function(){
        test.done();
    });
});