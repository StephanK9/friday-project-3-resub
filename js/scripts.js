function play (inputNumber) {
  var userNum = parseInt(inputNumber);
  var numArray = [];
  for (var i = 1; i <= userNum; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
      numArray.push('Ping-Pong');
    } else if (i % 3 == 0) {
      numArray.push('Ping');
    } else if (i % 5 == 0) {
      numArray.push('Pong');
    } else {
      numArray.push(i);
    }
  };
  return numArray;
};


$(document).ready(function() {
  $("form").submit(function(event) {
    $("#list").empty();
    event.preventDefault();



    var pingPong = play($("#input-number").val());

    pingPong.forEach(function (value) {

      $("#list").append("<li>" + value + "</li>");

    });
  });
});
