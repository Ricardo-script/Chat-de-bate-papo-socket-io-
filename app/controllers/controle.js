module.exports.index = function(app,req,res){
    res.render('index');
}

module.exports.chat = function(app,req,res){
    res.render('chat');
}

module.exports.entrar = function(app,req,res){
    var dadosForm = req.body;

    app.get('io').emit(
        'msgParaCliente',
        {usuario: dadosForm.usuario, mensagem: 'Acabou de entrar no chat'}
    );

    res.render('chat',{dadosForm:dadosForm});
}