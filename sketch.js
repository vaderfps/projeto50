var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("./assets/shooter_2.png")
  shooter_shooting = loadImage("./assets/shooter_3.png")
  bgImg = loadImage("./assets/bg.jpeg")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicione a imagem de fundo
  bg = createSprite(displayWidth/2-20, displayHeight/2-40,20,20)
  bg.addImage(bgImg)  

//crie o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300,50,50)
player.addImage(shooterImg)
player.scale = 0.5
}

function draw() {
  background(0); 




  //mova o jogador para cima e para baixo e torne o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW") || touches.length>0){
    player.y = player.y-10
}

if(keyDown("DOWN_ARROW") || touches.length>0){
  player.y = player.y+10
}
//libere as balas e mude a imagem do atirador para a posição de tiro quando a tecla espaço for pressionada
if(keyWentDown("ENTER")){
player.addImage(shooter_shooting)
}

//o jogador volta à imagem original quando pararmos de pressionar a tecla espaço
else if(keyWentUp("ENTER")){
player.addImage(shooterImg)
}

drawSprites();

}
