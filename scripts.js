PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer({
                  width:512,
                  height:512,
                  transparent:true,
                  resolution:1	

               });
document.getElementById("game-id").appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
    .add("resources/rat.png")
    .load(setup);

var rat;

function setup(){
  rat = new PIXI.Sprite(
    PIXI.loader.resources["resources/rat.png"].texture
  );

  updateRat();
  animationLoop();

  stage.addChild(rat);
}

function updateRat(){
  rat.scale.set(0.3,0.3);

  rat.x = renderer.width/2;
  rat.y = renderer.height/2;
  rat.anchor.set(0.5,0.5);
}

function animationLoop(){
  requestAnimationFrame(animationLoop);

  rat.rotation += 0.01;
  rat.pivot.set();

  renderer.render(stage);
}