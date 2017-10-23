<script>

var x = 160;
var y = 160;
var rx  = 100;
var ry = 100;
var vidas = 3;
var potos = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0,255,255);
  
  rect(rx, ry, 80, 80);
  
  rx++
  ry--

  
 if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  
  textSize(25);
  fill(255,255,0)
  text("Vidas:" +vidas,30,40);
  fill(255,255,0);
  text("Pontos:" +potos,230,40);
  
</script>
