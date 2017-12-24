
    var socket=io();

    socket.on('connect',function(){
      console.log('connected to server');

      socket.emit('createMessage',{
        from:'eymooo@gmail.com',
        text:'selam ben can'
      });
    });

    socket.on('disconnect',function(){
      console.log('disconnected from server');
    });

socket.on('newMessage',function(message){
  console.log('newMessage',message);
});
