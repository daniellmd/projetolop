var x = 300;
var y = 405;
var rx  = 210;
var ry = 105;
var cx = 500;
var cy = 210;
var xx = 600;
var xy = 400;
var vx = 100;
var vy = 550;
var zx = 800;
var zy = 550;
var vidas = 3;
var pontos = 199;
var nivel =1;
var tamBloco = 35;
var imgzombie1;
var imgzombie2;
var fundo;
var imgpirulito;
var tempo=0;
var tela=1;
var cima= 0;
var baixo = 1;
var esquerda = 2;
var direita = 3;
var direcao1 = cima;
var direcao2 = cima;
var direcao3 = cima;
var direcao4 = cima;
var direcao5 = cima;
var song;
var imgzombie3;
var imgzombie4;
var imgzombie5;
var imgzombie6;


function preload(){
  imgzombie1 = loadImage("zombie1.png");
  imgzombie2 = loadImage("zombie2.png");
  fundo = loadImage("BG.png");
  imgpirulito = loadImage("pirulito.png");
  end = loadImage("imgfinal.jpg");
  vida = loadImage("heart.png");
  song = loadSound("music.mp3");
  imgzombie3 = loadImage("zombie3.png");
  imgzombie4 = loadImage("zombie4.png");
  imgzombie5 = loadImage("zombie5.png");
  imgzombie6 = loadImage("zombie6.png");
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
/*
function colisao_fantasma(px, py) {
  j = Math.floor( px / tamBloco ); 
  i = Math.floor( py / tamBloco );
  if ( tela=  ) {
    
   return true;     
  }
  else {
     return false;  
  }
  
}
*/

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
  if ( ! colisao( rx -10, ry + tamBloco/2 ) ) {
       rx = rx - 10;       
     }
     else
     {
      direcao1 =Math.floor((Math.random() * 4));
  }
}
  if(direcao1 == cima){
  if ( ! colisao( rx + tamBloco/2, ry -10) ) {
       ry = ry - 10;       
     }
  else
  {
     direcao1 =Math.floor((Math.random() * 4));
  }
}
  if(direcao1 == direita)
  {
    if(! colisao( rx +20, ry + tamBloco/2)){
      rx = rx+10;
    }
    else{
       direcao1 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao1 == baixo)
   {
     if( ! colisao( rx + tamBloco/2, ry +40 ) ){
       ry = ry + 10;
     }
     else
     {
         direcao1 =Math.floor((Math.random() * 4));
      }
    }

 image(imgzombie3,cx,cy,36,33);
  if(direcao2 == esquerda){
  if ( ! colisao( cx -10, cy + tamBloco/2 ) ) {
       cx = cx - 10;       
     }
     else
     {
      direcao2 =Math.floor((Math.random() * 4));
  }
}
  if(direcao2 == cima){
  if ( ! colisao( cx + tamBloco/2, cy -10) ) {
       cy = cy - 10;       
     }
  else
  {
     direcao2 =Math.floor((Math.random() * 4));
  }
}
  if(direcao2 == direita)
  {
    if(! colisao( cx +20, cy + tamBloco/2)){
      cx = cx+10;
    }
    else{
       direcao2 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao2 == baixo)
   {
     if( ! colisao( cx + tamBloco/2, cy +40 ) ){
       cy = cy + 10;
     }
     else
     {
         direcao2 =Math.floor((Math.random() * 4));
      }
    }

    image(imgzombie4,xx,xy,36,33);
  if(direcao3 == esquerda){
  if ( ! colisao( xx -10,xy + tamBloco/2 ) ) {
       xx = xx - 10;       
     }
     else
     {
      direcao3 =Math.floor((Math.random() * 4));
  }
}
  if(direcao3 == cima){
  if ( ! colisao( xx + tamBloco/2, xy -10) ) {
       xy = xy - 10;       
     }
  else
  {
     direcao3 =Math.floor((Math.random() * 4));
  }
}
  if(direcao3 == direita)
  {
    if(! colisao( xx +20, xy + tamBloco/2)){
      xx = xx+10;
    }
    else{
       direcao3 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao3 == baixo)
   {
     if( ! colisao( xx + tamBloco/2, xy +40 ) ){
       xy = xy + 10;
     }
     else
     {
         direcao3 =Math.floor((Math.random() * 4));
      }
    }

    image(imgzombie5,vx,vy,36,33);
  if(direcao4 == esquerda){
  if ( ! colisao( vx -10,vy + tamBloco/2 ) ) {
       vx = vx - 10;       
     }
     else
     {
      direcao4 =Math.floor((Math.random() * 4));
  }
}
  if(direcao4 == cima){
  if ( ! colisao( vx + tamBloco/2, vy -10) ) {
       vy = vy - 10;       
     }
  else
  {
     direcao4 =Math.floor((Math.random() * 4));
  }
}
  if(direcao4 == direita)
  {
    if(! colisao( vx +20, vy + tamBloco/2)){
      vx = vx+10;
    }
    else{
       direcao4 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao4 == baixo)
   {
     if( ! colisao( vx + tamBloco/2, vy +40 ) ){
       vy = vy + 10;
     }
     else
     {
         direcao4 =Math.floor((Math.random() * 4));
      }
    }
  
image(imgzombie6,zx,zy,36,33);
  if(direcao5 == esquerda){
  if ( ! colisao( zx -10,zy + tamBloco/2 ) ) {
       zx = zx - 10;       
     }
     else
     {
      direcao5 =Math.floor((Math.random() * 4));
  }
}
  if(direcao5 == cima){
  if ( ! colisao( zx + tamBloco/2, zy -10) ) {
       zy = zy - 10;       
     }
  else
  {
     direcao5 =Math.floor((Math.random() * 4));
  }
}
  if(direcao5 == direita)
  {
    if(! colisao( zx +20, zy + tamBloco/2)){
      zx = zx+10;
    }
    else{
       direcao5 =Math.floor((Math.random() * 4));
    }
   }
   if(direcao5 == baixo)
   {
     if( ! colisao( zx + tamBloco/2, zy +40 ) ){
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
