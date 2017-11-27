var x = 300;
var y = 405;
var rx  = 210;
var ry = 105;
var cx = 500;
var cy = 210;
var xx = 600;
var xy = 400;
var vx = 100;
var vy = 505;
var zx = 800;
var zy = 450;
var vidas = 3;
var pontos = 0;
var nivel =1;
var tamBloco = 35;
var fundo;
var imgpirulito;
var tempo=0;
var tela=1;
var cima= 0;
var baixo = 1;
var esquerda = 2;
var direita = 3;
var direcao1 = cima;
var direcao2 = esquerda;
var direcao3 = direita;
var direcao4 = baixo;
var direcao5 = cima;
var song;
var imgzombie1;
var imgzombie2;
var imgzombie2esquerda;
var imgzombie2direita;
var imgzombie2cima;
var imgzombie2baixo;
var imgzombie3;
var imgzombie3esquerda;
var imgzombie3direita;
var imgzombie3cima;
var imgzombie3baixo;
var imgzombie4;
var imgzombie5;
var imgzombie5esquerda;
var imgzombie5direita;
var imgzombie5cima;
var imgzombie5baixo;
var imgzombie6;
var imgzombie6esquerda;
var imgzombie6direita;
var imgzombie6cima;
var imgzombie6baixo;


function preload(){
 
  fundo = loadImage("BG.png");
  imgpirulito = loadImage("pirulito.png");
  end = loadImage("imgfinal.jpg");
  vida = loadImage("heart.png");
  song = loadSound("music.mp3");
  imgzombie1 = loadImage("zombie1.png");
  imgzombie2 = loadImage("zombie2.png");
  imgzombie2baixo = loadImage("zombie2.png");
  imgzombie2cima = loadImage("zombie2cima.png");
  imgzombie2esquerda = loadImage("zombie2esquerda.png");
  imgzombie2direita = loadImage("zombie2direita.png");
  imgzombie3 = loadImage("zombie3.png");
  imgzombie3baixo = loadImage("zombie3.png");
  imgzombie3cima = loadImage("zombie3cima.png");
  imgzombie3esquerda = loadImage("zombie3esquerda.png");
  imgzombie3direita = loadImage("zombie3direita.png");
  imgzombie4 = loadImage("zombie4.png");
  imgzombie5 = loadImage("zombie5.png");
  imgzombie5baixo = loadImage("zombie5.png");
  imgzombie5cima = loadImage("zombie5cima.png");
  imgzombie5esquerda = loadImage("zombie5esquerda.png");
  imgzombie5direita = loadImage("zombie5direita.png");
  imgzombie6 = loadImage("zombie6.png");
  imgzombie6baixo = loadImage("zombie6.png");
  imgzombie6cima = loadImage("zombie6cima.png");
  imgzombie6esquerda = loadImage("zombie6esquerda.png");
  imgzombie6direita = loadImage("zombie6direita.png");
  }
  
var  
   cenario = [ 
  ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#'],
  ['#','#','#','#','#','#','v','#','#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','v','v','v','#'],
  ['#','v','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','#'],
  ['#','v','#','#','#','#','#','#','#','#','v','#','#','v','#','#','#','#','#','#','v','#','#','#','v','#','#'],
  ['#','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','#'],
  ['#','#','#','#','v','#','v','#','v','#','#','v','v','#','#','v','#','v','#','v','#','#','v','#','#','v','#'],
  ['#','v','v','v','v','#','v','#','v','#','v','v','v','v','#','v','v','v','#','v','v','v','v','v','v','v','#'],
  ['#','v','#','#','#','#','v','#','#','#','v','v','v','v','#','#','#','v','#','#','v','#','v','#','#','#','#'],
  ['#','v','v','v','v','#','v','v','v','#','v','v','v','v','#','v','v','v','#','v','v','#','v','v','v','v','#'],
  ['#','#','#','#','v','#','v','#','v','#','#','#','#','#','#','v','#','v','#','v','#','#','#','v','v','v','#'],
  ['#','v','v','v','v','v','v','#','v','v','v','v','v','v','#','v','#','v','v','v','v','v','v','v','#','#','#'],
  ['#','v','#','v','#','#','#','#','#','#','v','#','#','v','#','#','#','#','#','#','v','#','v','v','v','v','#'],
  ['#','v','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','#','v','v','v','v','v','v','#','v','v','v','v','v','v','#','v','v','v','v','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];
function colisao(px, py) {
  j = Math.floor( px / tamBloco ); 
  i = Math.floor( py / tamBloco );
  if ( cenario[i][j] == '#' ) {
     return true;     
  }
  else {
     return false;  

  }
  
}
function colisao_bonus(px, py) {
  j = Math.floor( px / tamBloco ); 
  i = Math.floor( py / tamBloco );
  if ( cenario[i][j] == '@' ) {
     cenario[i][j] = '*'
  
   return true;     
  }
  else {
     return false;  
  }
  
}
function colisao_pontos(px, py) {
  j = Math.floor( px / tamBloco ); 
  i = Math.floor( py / tamBloco );
  if ( cenario[i][j] == 'v' ) {
     cenario[i][j] = '*'
  
   return true;     
  }
  else {
     return false;  
  }
  
}

function colisao_fantasma(x, y, rx, ry) {

  if ( dist(x,y,rx,ry)<20) {
    
   return true;   

  }
  else {
     return false;  
  }
  
}

function colisao_fantasma2(x, y, cx, cy) {

  if ( dist(x,y,cx,cy)<20) {
    
   return true;   

  }
  else {
     return false;  
  }
  
}

function colisao_fantasma3(x, y, xx, xy) {

  if ( dist(x,y,xx,xy)<20) {
    
   return true;   

  }
  else {
     return false;  
  }
  
}

function colisao_fantasma4(x, y, vx, vy) {

  if ( dist(x,y,vx,vy)<20) {
    
   return true;   

  }
  else {
     return false;  
  }
  
}

function colisao_fantasma5(x, y, zx, zy) {

  if ( dist(x,y,zx,zy)<20) {
    
   return true;   

  }
  else {
     return false;  
  }
  
}

function setup() {
  createCanvas(946, 596);
  frameRate(30);
  direcao = esquerda;
  song.play();


}


function draw() {
if(tela==1) {
  image(fundo,-530,-160);
  fill(0,255,255);
    textSize(50);
    fill(0);
    text("Press enter to start",250,250);
    if(keyIsDown(ENTER)){
      tela=2;
    }

}

if(tela==2){
tempo+=3
  image(fundo,-530,-160);
  fill(0,255,255);
  
  /*Colisão do fantasma com os blocos*/
  
  image(imgzombie2,rx,ry,36,33);
  if(direcao1 == esquerda){

  if ( ! colisao( rx -10, ry ) ) {
       rx = rx - 10;       
     }
     else
     {
      direcao1 =Math.floor((Math.random() * 4));
  }
}
  if(direcao1 == cima){

  if ( ! colisao( rx , ry -10) ) {
       ry = ry - 10;       
     }
  else
  {
     direcao1 =Math.floor((Math.random() * 4));
  }
}
  if(direcao1 == direita)

  {
    if(! colisao( rx +35, ry )){
      rx = rx+10;
    }
    else{
       direcao1 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao1 == baixo)

   {
     if( ! colisao( rx , ry +40 ) ){
       ry = ry + 10;
     }
     else
     {
         direcao1 =Math.floor((Math.random() * 4));
      }
    }

 image(imgzombie3,cx,cy,36,33);
  if(direcao2 == esquerda){
    
  if ( ! colisao( cx -10, cy) ) {
       cx = cx - 10;       
     }
     else
     {
      direcao2 =Math.floor((Math.random() * 4));
  }
}
  if(direcao2 == cima){
  
  if ( ! colisao( cx, cy -10) ) {
       cy = cy - 10;       
     }
  else
  {
     direcao2 =Math.floor((Math.random() * 4));
  }
}
  if(direcao2 == direita)
    
  {
    if(! colisao( cx +35, cy)){
      cx = cx+10;
    }
    else{
       direcao2 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao2 == baixo)
    
   {
     if( ! colisao( cx , cy +40 ) ){
       cy = cy + 10;
     }
     else
     {
         direcao2 =Math.floor((Math.random() * 4));
      }
    }

    image(imgzombie4,xx,xy,36,33);
  if(direcao3 == esquerda){
  if ( ! colisao( xx -10,xy) ) {
       xx = xx - 10;       
     }
     else
     {
      direcao3 =Math.floor((Math.random() * 4));
  }
}
  if(direcao3 == cima){
  if ( ! colisao( xx , xy -10) ) {
       xy = xy - 10;       
     }
  else
  {
     direcao3 =Math.floor((Math.random() * 4));
  }
}
  if(direcao3 == direita)
  {
    if(! colisao( xx +35, xy )){
      xx = xx+10;
    }
    else{
       direcao3 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao3 == baixo)
   {
     if( ! colisao( xx, xy +40 ) ){
       xy = xy + 10;
     }
     else
     {
         direcao3 =Math.floor((Math.random() * 4));
      }
    }

    image(imgzombie5,vx,vy,36,33);
  if(direcao4 == esquerda){
    
  if ( ! colisao( vx -10,vy) ) {
       vx = vx - 10;       
     }
     else
     {
      direcao4 =Math.floor((Math.random() * 4));
  }
}
  if(direcao4 == cima){
    
  if ( ! colisao( vx , vy -10) ) {
       vy = vy - 10;       
     }
  else
  {
     direcao4 =Math.floor((Math.random() * 4));
  }
}
  if(direcao4 == direita)
  {
    
    if(! colisao( vx +35, vy )){
      vx = vx+10;
    }
    else{
       direcao4 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao4 == baixo)
    
   {
     if( ! colisao( vx , vy +40 ) ){
       vy = vy + 10;
     }
     else
     {
         direcao4 =Math.floor((Math.random() * 4));
      }
    }
  
image(imgzombie6,zx,zy,36,33);
  if(direcao5 == esquerda){
    imgzombie6 = imgzombie6esquerda;
  if ( ! colisao( zx -10,zy) ) {
       zx = zx - 10;       
     }
     else
     {
      direcao5 =Math.floor((Math.random() * 4));
  }
}
  if(direcao5 == cima){
    imgzombie6 = imgzombie6cima;
  if ( ! colisao( zx, zy -10) ) {
       zy = zy - 10;       
     }
  else
  {
     direcao5 =Math.floor((Math.random() * 4));
  }
}
  if(direcao5 == direita)
  {
    imgzombie6 = imgzombie6direita;
    if(! colisao( zx +35, zy)){
      zx = zx+10;
    }
    else{
       direcao5 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao5 == baixo)
   {
      imgzombie6 = imgzombie6baixo;
     if( ! colisao( zx, zy +35 ) ){
       zy = zy + 10;
     }
     else
     {
         direcao5 =Math.floor((Math.random() * 4));
      }
    }
  

  //imageMode(CENTER)
  
/*Colisão do personagem com os blocos*/
    if (keyIsDown(LEFT_ARROW)) {
     if ( ! colisao( x + 17 - tamBloco/2, y ) ) {
       x = x - 10;       
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) {
     if ( ! colisao( x + 35, y ) ) {
       x = x + 10;       
     } 
   }

  if (keyIsDown(UP_ARROW)){
     if ( ! colisao( x, y -6) ) {
       y = y - 10;       
     }
   }

  if (keyIsDown(DOWN_ARROW)){
     if ( ! colisao( x, y + 35 ) ) {
       y = y + 10;       
     } 
   }
    
    /*Colisão do personagem com os pontos*/
      
  
 if (keyIsDown(LEFT_ARROW)) {
     if (  colisao_pontos( x + 20 - tamBloco/2, y ) ) {
       x = x - 10;
  pontos++;       
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) {
     if (  colisao_pontos( x + 20, y ) ) {
       x = x + 10; 
    pontos++;             
     } 
   }

  if (keyIsDown(UP_ARROW)){
     if (  colisao_pontos( x, y + 20 - tamBloco/2 ) ) {
       y = y - 10; 
    pontos++;             
     }
   }

  if (keyIsDown(DOWN_ARROW)){
     if (  colisao_pontos( x, y + 20 ) ) {
       y = y + 10;  
  pontos++;            
     } 
   }

  /* Colisão com a vida*/
  if (keyIsDown(LEFT_ARROW)) {
     if (  colisao_bonus( x + 20 - tamBloco/2, y ) ) {
       x = x - 10;
  vidas++;       
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) {
     if (  colisao_bonus( x + 20, y ) ) {
       x = x + 10; 
    vidas++;             
     } 
   }

  if (keyIsDown(UP_ARROW)){
     if (  colisao_bonus( x, y + 20 - tamBloco/2 ) ) {
       y = y - 10; 
    vidas++;             
     }
   }

  if (keyIsDown(DOWN_ARROW)){
     if (  colisao_bonus( x, y + 20 ) ) {
       y = y + 10;  
  vidas++;            
     } 
   }
   


  fill(255, 0, 0);
  image(imgzombie1,x,y,36,33);
  
  textSize(25);
  fill(255,0,0)
  text("Vidas:" +vidas,20,25);
  text("Pontos:" +pontos,120,25);
  text("Nivel: "+nivel,300,25);
  text("Tempo: "+parseInt((tempo/30)),450,25);
 
  for(i=0;i<vidas;i++)
  {
    if(cenario[i] =='*'){
      image(vida,20,25)
    }
  }
   for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == '#' ) {
         fill(160,82,45);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco);   
    }
      if(cenario[i][j] =='v')
      { 
        fill(255);
        ellipse(j*tamBloco+tamBloco/2,i*tamBloco+tamBloco/2,16,16);
      }
    
    if(cenario[i][j] =='@')
      { 
        fill(255);
        image(imgpirulito, j*tamBloco,i*tamBloco,40,40);
      }
} 
}
if(vidas
<=0)
{
  tela=4
}
}
if(tela==3)
{
  image(end,0,0)
  textSize(90)
  fill(255,0,0)
  text("Parabens, fim de jogo!",0,150)
  if(keyIsDown(RIGHT_ARROW))
  {
    tela=1
  }
}
if(tela==4)
{
  image(fundo,-530,-160)
  textSize(100)
  fill(255,0,0)
  text("GAME OVER",175,300)
  if(keyIsDown(LEFT_ARROW))
  {
    tela=1
  }
}

if(colisao_fantasma(x,y,rx,ry))
{
  vidas--
  x = 300
  y = 405
}

if(colisao_fantasma2(x,y,cx,cy))
{
  vidas--
  x = 300
  y = 405
}

if(colisao_fantasma3(x,y,xx,xy))
{
  vidas--
  x = 300
  y = 405
}

if(colisao_fantasma4(x,y,vx,vy))
{
  vidas--
  x = 300
  y = 405
}

if(colisao_fantasma5(x,y,zx,zy))
{
  vidas--
  x = 300
  y = 405
}

if(pontos==100){
  cenario[2][3]='@'}


  if(pontos==200)
{
  cenario = [ 
  ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','v','#','v','#'],
  ['#','v','*','#','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','#','v','#'],
  ['#','#','v','v','v','v','#','v','#','#','v','#','#','v','#','v','#','#','#','#','v','#','v','v','#','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','#'],
  ['#','#','v','v','#','#','v','#','v','#','*','v','v','#','#','v','#','v','#','v','#','#','#','v','v','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','#','#','#','v','v','#','v','v','v','v','@','v','v','v','#','v','v','#','#','#','v','v','#','v','#'],
  ['#','v','v','#','v','v','v','v','v','#','v','v','v','v','#','v','v','v','v','v','v','v','v','v','#','#','#'],
  ['#','#','v','#','v','#','v','#','v','#','#','#','#','#','#','v','#','v','#','v','#','#','#','v','v','v','#'],
  ['#','v','v','#','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','#','v','#','v','#','v','#','v','#','#','v','#','#','#','#','#','#','v','v','v','v','@','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','#'],
  ['#','v','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];
x=200
y=300
nivel=2
rx=300
ry = 300
}
if(pontos==400)
{
  cenario = [ 
  ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','v','v','v','#'],
  ['#','v','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','#'],
  ['#','v','#','v','#','#','#','#','#','#','v','#','#','v','#','#','#','#','#','#','v','#','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','#'],
  ['#','#','#','#','v','#','v','#','v','#','#','v','v','#','#','v','#','v','#','v','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','#','v','v','v','#','v','v','v','v','#','v','v','v','#','v','v','v','v','v','v','v','#'],
  ['#','v','#','#','#','#','v','#','#','#','v','v','@','v','#','#','#','v','#','#','#','#','v','v','v','v','#'],
  ['#','v','v','v','v','#','v','v','v','#','v','v','v','v','#','v','v','v','#','v','v','v','v','v','v','v','#'],
  ['#','#','#','#','v','#','v','#','v','#','#','#','#','#','#','v','#','v','#','v','#','#','#','v','v','v','#'],
  ['#','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','#','v','#','#','#','#','#','#','v','#','#','v','#','#','#','#','#','#','v','#','v','v','@','v','#'],
  ['#','v','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];
x=400;
y=205;
nivel=3
}
if(pontos==600)
{
   cenario = [ 
  ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','v','v','v','#','v','v','v','v','v','v','#','v','v','v','v','v','v','#','v','v','v','v','v','v','v','#'],
  ['#','#','#','v','#','v','#','#','#','#','v','#','v','#','#','#','#','v','#','v','#','v','#','v','#','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','#','v','#','v','#'],
  ['#','v','#','#','#','#','#','v','v','v','#','#','#','v','v','v','#','#','#','v','#','v','#','v','#','v','#'],
  ['#','v','v','v','#','v','v','v','#','v','v','#','v','v','v','v','v','v','#','v','#','v','#','v','#','v','#'],
  ['#','v','#','v','#','v','v','#','#','#','v','#','v','#','#','#','v','v','#','v','#','v','#','#','#','v','#'],
  ['#','v','#','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','v','#'],
  ['#','v','v','v','#','#','#','v','v','v','v','v','#','*','*','*','#','v','#','v','#','#','#','#','#','v','#'],
  ['#','v','#','#','#','v','v','v','#','v','v','v','#','*','*','*','#','v','#','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','#','v','v','v','#','#','#','#','#','v','#','v','v','v','#','v','v','v','#'],
  ['#','v','#','#','#','#','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','#'],
  ['#','v','v','v','#','v','v','v','#','v','v','v','#','#','#','#','#','v','v','v','v','#','#','#','v','v','#'],
  ['#','#','#','v','#','v','#','#','#','v','v','v','v','v','#','v','v','v','v','v','#','#','#','#','#','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];
x=50;
y=70;
nivel=4
}

if(pontos==800)
{
  cenario = [ 
  ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','#'],
  ['#','v','#','#','#','v','#','#','#','v','#','#','#','v','#','#','#','v','#','#','#','v','#','#','#','v','#'],
  ['#','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','#'],
  ['#','#','#','#','v','#','#','#','v','v','#','#','#','v','#','v','#','#','#','v','#','v','#','v','#','#','#'],
  ['#','*','v','v','*','v','v','*','v','v','*','v','v','*','v','v','*','v','v','*','v','v','*','v','v','*','#'],
  ['#','v','#','#','#','v','#','#','v','#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#','v','#'],
  ['#','v','*','*','v','*','*','v','*','*','v','*','*','v','*','*','v','*','*','v','*','*','v','*','*','v','#'],
  ['#','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#'],
  ['#','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
  ['#','#','#','#','v','#','#','#','v','v','#','#','#','v','#','v','#','#','#','v','#','v','#','v','#','#','#'],
  ['#','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','#'],
  ['#','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','v','*','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];
rx=50;
nivel=5;

}

}
