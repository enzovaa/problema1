class Game {

    constructor(){
    }
  
    start () {
      player1 = createSprite (width/2+20, height/4*3);
      player1.addImage ("player1", player1img);
      player1.scale = 0.05
    }

    handlePlayerControls() {
      if (keyIsDown(UP_ARROW) || keyIsDown("W")){
        player1.positionY += 10;
      }
    }
  }

  