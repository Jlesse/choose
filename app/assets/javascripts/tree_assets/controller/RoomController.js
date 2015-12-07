function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(mouseX, mouseY, 80, 80);
}

$(document).ready(function() {
  var roomId = $(".room").attr("id");
  console.log($(".room"));
  console.log(roomId);
  // room1.setup();
  // room1.draw();
});
