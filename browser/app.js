var socket = io(window.location.origin);

socket.on('connect', function(){
  whiteboard.on('draw', function (start, end, strokeColor){
    socket.emit('aDraw', start, end, strokeColor);
  });

  socket.on('otherPersonDraw', function(start, end, color){
    whiteboard.draw(start, end, color);
  });

});
