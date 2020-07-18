module.exports = function(app){
    app.get('/',function(req,res){
        app.app.controllers.controle.index(app,req,res);
    });
}