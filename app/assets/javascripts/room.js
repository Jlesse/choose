
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

// function Room(args) {
//   this.id = args.id
//   this.description = args.description
//   this.name = args.name
//   this.setup  = args.setup
//   this.draw = args.draw
//   this.preload = args.preload
// }

// var room1 = new Room({
//   id: 1,
//   description: "A weird room",
//   name: "room1",

//   setup: function(){
//     var myCanvas = createCanvas(600, 400, WEBGL);
//     myCanvas.parent("myContainer");
//   },

//   draw: function(){
//     rotateX(frameCount * 10000.00);
//     rotateY(frameCount * 10000.00);

//     box(100, 100, 200);

//     translate(-150,0,0);
//     sphere(50,6);
//     translate(150,0,0);
//     sphere(50,6);
//     torus(50, 8, 5);
//   }

// })




// var Rooms = [room1];
