casper.test.begin('Starting "agenda" tests', 1, function(test){
    casper.start('http://localhost:8080/', function(){
        this.clickLabel('Agenda', 'a');
    });

    casper.then(function(){
        test.assertEval(function() {
            return __utils__.findAll("body > section > a").length > 0;
        }, "verify if schedules are visible");
    });

    casper.run(function() {
        test.done();
    });
});