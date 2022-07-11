var w4, windowsImg;
var bk1Image;
var s1, s2, s3, s4, swImage; //windows
var g1, g2, g3, g1Image, g2Image, g3Image; //guns
var civ1, civ1Image, civ2Image, e1, e1Image, e2Image, h1, h1Image, h2Image, hkiller, hkillerImage; // civ=civilians, e=enemy, h=hostages, hkiller=hostage killer/holder
var civiliang, enemyg, hostageg; //groups
var spot

var l1winpos

function preload() {
  // windowsImg = loadImage("Images/4Windows.png");
  bk1Image = loadImage("Images/PopArtBlueGrungeBrickWall.jpg");
  swImage = loadImage("Images/SingularWindow.png")
  g1Image = loadImage("Images/Pistol.png")
  civ1Image = loadImage("Images/Civ1.png")
  civ2Image = loadImage("Images/Civ2.png")
  e1Image = loadImage("Images/Enemy1.png")
  e2Image = loadImage("Images/Enemy2.png")
  h1Image = loadImage("Images/Hostage1.png")
  h2Image = loadImage("Images/Hostage2.png")
  hkillerImage = loadImage("Images/HostageKiller.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // w4= createSprite(width/2,height/2)
  //w4.addImage(windowsImg)
  // w4.scale = 1.7;

  civiliang = new Group()
  enemyg = new Group()
  hostageg = new Group()


  g1 = createSprite(width / 2, height - 160)
  g1.addImage(g1Image)
  g1.scale = 1;

  spot = createSprite(World.mouseX,World.mouseY)
  spot.shapeColor = "red"

  s1 = createSprite(190, height / 2)
  s1.addImage(swImage)
  s1.scale = 0.75;
  s1.depth = g1.depth

  s2 = createSprite(width / 2 - 200, height / 2)
  s2.addImage(swImage)
  s2.scale = 0.75;
  s2.depth = g1.depth

  s3 = createSprite(width / 2 + 185, height / 2)
  s3.addImage(swImage)
  s3.scale = 0.75;
  s3.depth = g1.depth

  s4 = createSprite(width - 210, height / 2)
  s4.addImage(swImage)
  s4.scale = 0.75;
  s4.depth = g1.depth

  g1.depth = g1.depth + 1

  l1winpos = [{ x: 190, y: height / 2 }, { x: width / 2 - 200, y: height / 2 }, { x: width / 2 + 185, y: height / 2 }, { x: width - 210, y: height / 2 }]

  /*
  civ1 = createSprite(192,height/2+8)
  civ1.addImage(civ1Image)
  civ1.scale = 0.82;
  civ1.depth = g1.depth
  */
  //g1.depth = g1.depth + 1


}

function spawncivilians() {

  if (frameCount % 150 === 0) {
    var pos = random(l1winpos)
    civ1 = createSprite(pos.x, pos.y)
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: civ1.addImage(civ1Image);
        civ1.scale = 0.87;
        break;
      case 2: civ1.addImage(civ2Image);
        civ1.scale = 1.05;
        break;
      default: break;
    }

    civ1.lifetime = 100

    civ1.depth = g1.depth
    g1.depth = g1.depth + 1

    civiliang.add(civ1)
  }

}

function spawnenemys() {

  if (frameCount % 235 === 0) {
    var pos = random(l1winpos)
    e1 = createSprite(pos.x, pos.y)
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: e1.addImage(e1Image);
        e1.scale = 0.9;
        break;
      case 2: e1.addImage(e2Image);
        e1.scale = 0.9;
        break;
      default: break;
    }
    e1.lifetime = 100

    e1.depth = g1.depth
    g1.depth = g1.depth + 1

    enemyg.add(e1)

  }

}

function draw() {

  background(180);
  image(bk1Image, 0, 0, width, height)

  g1.x = mouseX

  spot.x = mouseX;
  spot.y = mouseY;
  
  

  var r = Math.round(random(1, 3))
  if (r === 1) {
    spawncivilians()
  } else if (r == 2) {
    spawnenemys()
  }
  else {
    spothostage()
  }

  drawSprites();

//fill("red")
  //ellipse(World.mousex, World.mousey, 15,15)
  
}

function spothostage() {

  if (frameCount % 350 === 0) {
    var pos = random(l1winpos)
    h1 = createSprite(pos.x + 35, pos.y + 6)
    hkiller = createSprite(pos.x - 49, pos.y - 20)
    hkiller.addImage(hkillerImage);
    hkiller.scale = 0.5;
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: h1.addImage(h1Image);
        h1.scale = 0.96;
        break;
      case 2: h1.addImage(h2Image);
        h1.scale = 0.91;
        break;
      default: break;
    }

    h1.lifetime = 300
    hkiller.lifetime = 300

    h1.depth = g1.depth
    hkiller.depth = g1.depth
    g1.depth = g1.depth + 1

    hostageg.add(h1)
  }

}