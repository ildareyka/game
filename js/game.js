// создаем новую сцену с именем "Game"
let gameScene = new Phaser.Scene('Game');

const container = document.getElementById('renderDiv');
let config = {
    type: Phaser.AUTO,
    parent: 'renderDiv',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: gameScene
};

const Rectangle = Phaser.Geom.Rectangle;
      const RectangleToRectangle = Phaser.Geom.Intersects.RectangleToRectangle;
      const GetRectangleIntersection = Phaser.Geom.Intersects.GetRectangleIntersection;
      const GetBounds = Phaser.Display.Bounds.GetBounds;
 
// создаем игру и передам ей конфигурацию
let game = new Phaser.Game(config);

// загрузка файлов ресурсов для нашей игры
  gameScene.preload = function() {
    // загрузка изображений
    this.load.image('background', 'src/assets/background.png')
    this.load.image('ball', 'src/assets/ball.png');
    this.load.image('collar', 'src/assets/collar.png');
    this.load.image('frisbi', 'src/assets/frisbi.png');
    this.load.image('kanat', 'src/assets/kanat.png');
    this.load.image('kong', 'src/assets/kong.png');
    this.load.image('taskBar', 'src/assets/taskBar.png')

    this.load.image('text-frisbi', 'src/assets/text-frisbi.png')
    this.load.image('text-ball', 'src/assets/text-ball.png')
    this.load.image('text-collar', 'src/assets/text-collar.png')
    this.load.image('text-kanat', 'src/assets/text-kanat.png')
    this.load.image('text-kong', 'src/assets/text-kong.png')
  };

  // выполняется один раз, после загрузки ресурсов
  gameScene.create = function() {
            //Фоновое изображение
        this.add.image(960, 540, 'background').setScale(1.5);

        //Текстовые картинки
        const textFrisbi = this.add.sprite(370, 330, 'text-frisbi').setInteractive().setScale(1.5);
        const textCollar = this.add.sprite(1150, 680, 'text-collar').setInteractive().setScale(1.5);
        const textBall = this.add.sprite(500, 650, 'text-ball').setInteractive().setScale(1.5);
        const textKong = this.add.sprite(1755, 400, 'text-kong').setInteractive().setScale(1.5);
        const textKanat = this.add.sprite(1530, 280, 'text-kanat').setInteractive().setScale(1.5);
            
        //Игрушки
        const ball = this.add.sprite(1400, 930, 'ball').setInteractive().setScale(1.5);
        this.input.setDraggable(ball);

        const collar = this.add.sprite(1780, 940, 'collar').setInteractive().setScale(1.5);
        this.input.setDraggable(collar);

        const frisbi = this.add.sprite(620, 1000, 'frisbi').setInteractive().setScale(1.5);
        this.input.setDraggable(frisbi);

        const kong = this.add.sprite(120, 860, 'kong').setInteractive().setScale(1.5);
        this.input.setDraggable(kong);

        const kanat = this.add.sprite(680, 370, 'kanat').setInteractive().setScale(1.5);
        this.input.setDraggable(kanat);

        const taskBar = this.add.sprite(950, 220, 'taskBar').setInteractive().setScale(1.5);

        

        //Захват мышкой
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff0000);
        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            
        });

        this.input.on('dragend', function (pointer, gameObject) {
          gameObject.clearTint();
          if (Phaser.Geom.Intersects.RectangleToRectangle(gameObject.getBounds(), sprite.getBounds())) {
            gameObject.setVisible(false);
            counter++;
            
            
        }
        }); 
        
      
      }

      
        
     

       
       

    
            
           // createProgressBar(gameScene, 1030, 308, 120, 36);
       
        
        /*function createProgressBar(scene, x, y, width, height) {

          
          // Код для создания прогресс-бара
          let graphics = scene.add.graphics();
          graphics.fillStyle(0xffffff, 1);
          graphics.fillRoundedRect(x, y, width, height, 16);
            
          let bar = scene.add.graphics();
          bar.fillStyle(0x63AC2E, 1);
          bar.fillRoundedRect(x, y, width  *  (currentCount / 5), height, 16);
          
          
          let barText = scene.add.text(x + width - 95 , y + height + 20 , currentCount.toString() + '/5  ', {
            fontFamily: 'Manrope',
            fontSize: '22px',
            fontStyle: 'bold',
            color: '#000000',
            align: 'center',
          });
  
          barText.setOrigin(0.5, 0.5);
          
        }
        createProgressBar(gameScene, 1030, 308, 120, 36);
        // Использование функции
        
        

        
        

        /*function createProgressBar(scene, x, y, width, height) {
            // Код для создания прогресс-бара
            let graphics = scene.add.graphics();
            graphics.fillStyle(0xffffff, 1);
            graphics.fillRoundedRect(x, y, width, height, 16);
              
            let bar = scene.add.graphics();
            bar.fillStyle(0x63AC2E, 1);
            bar.fillRoundedRect(x, y, width  *  (currentCount / 5), height, 16);
            
            
            let barText = scene.add.text(x + width - 95 , y + height + 20 , currentCount.toString() + '/5  ', {
              fontFamily: 'Manrope',
              fontSize: '22px',
              fontStyle: 'bold',
              color: '#000000',
              align: 'center',
            });
    
            barText.setOrigin(0.5, 0.5);

          }
          // Использование функции
          createProgressBar(gameScene, 1030, 308, 120, 36, currentCount);*/






   
   

    // выполняется каждый кадр (ориентировочно 60 раз в секунду)
    gameScene.update = function() {
      
   
  }

