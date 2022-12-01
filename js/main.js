//canvas set up
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let CANVAS_HEIGHT = canvas.height = 700;
let CANVAS_WIDTH = canvas.width = 800;
//variable declaration
let gameSpeed = 15;

//define img
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/images/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/images/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/images/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/images/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/images/layer-5.png';

//constructor for layers
class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed)
    }
    draw() {
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x2,this.y,this.width,this.height)
    }
}
//constructor call
const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 1);
//array for loop

const gameObjects = [layer1, layer2, layer3, layer4, layer5];


//animator function loop
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
    requestAnimationFrame(animate);
}
animate();