<script>

var x = 160;
var y = 160;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear ();
  fill(64, 224, 0);
  rect(100, 100, 80, 80);

  
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
}



</script>
