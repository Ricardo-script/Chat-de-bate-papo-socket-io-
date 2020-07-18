module.exports = function(app){
    app.get('/chat',function(req,res){
        app.app.controllers.controle.chat(app,req,res);
    });

    app.post('/chat',function(req,res){
        app.app.controllers.controle.entrar(app,req,res);
    });
}