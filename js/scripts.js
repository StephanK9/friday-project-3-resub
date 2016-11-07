//User-Interface Logic//

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log(x);

//Business Logic//

var x = $('#input-number').val()
for (var i = 1; i <= x; i++) {
  if (i % 15 === 0) {
    $('#list').append('<li>'+"Ping-Pong"+'</li>');}
  else if (i % 3 === 0) {
    $('#list').append('<li>'+"Ping"+'</li>');}
  else if (i % 5 === 0) {
    $('#list').append('<li>'+"Pong"+'</li>');}
  else{
    $('#list').append('<li>'+i+'</li>');}

    };
  });
});
