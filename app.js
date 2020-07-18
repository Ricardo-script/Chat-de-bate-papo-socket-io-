var app = require('./config/server');

var server = app.listen(8000,function(){
    console.log('Localhost:8000 online');
});

var io = require('socket.io').listen(server);
app.set('io',io);

io.on('connect',function(socket){
    console.log('Usuário Conectou');

    socket.on('disconnect',function(){
        console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor',function(data){
        socket.emit(
            'msgParaCliente',
            {usuario: data.usuario, mensagem: data.mensagem}
        );
        socket.broadcast.emit(
            'msgParaCliente',
            {usuario: data.usuario, mensagem: data.mensagem}
        );
    });
});