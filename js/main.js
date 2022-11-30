//canvas set up
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let CANVAS_HEIGHT = canvas.height = 700;
let CANVAS_WIDTH = canvas.width = 800;
//variable declaration
let gameSpeed = 5;

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

function animate() {
    ctx.drawImage(backgroundLayer4,0,0);
    requestAnimationFrame(animate);

}
animate();