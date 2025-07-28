//your parameter variables go here!
let tri_point = 30;
let size = 40;
let layers = 3;
let strokeThickness = 5;



let x  = 100;
let y = 100;

function drawTriangleAt(tx, ty, angle) { 
  push();
  translate(tx, ty);
  rotate(angle*random(TWO_PI));
  triangle(-3, -10, -10, 5, 5, 5);
  pop();
}

function randomColor(){
  let r = random (255);
  let g = random (255);
  let b = random (255);
  let o = random (50, 255);
  return color (r, g, b, o);
}

function setup_wallpaper(pWallpaper) {
 pWallpaper.output_mode(DEVELOP_GLYPH);
 pWallpaper.output_mode(GRID_WALLPAPER);
 pWallpaper.resolution(FIT_TO_SCREEN);
 pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
 pWallpaper.grid_settings.cell_width  = 200;
 pWallpaper.grid_settings.cell_height = 200;
 pWallpaper.grid_settings.row_offset  = 200;
}

function wallpaper_background() {
  background(100, 100, 100); //light honeydew green colour
}

function my_symbol(x, y) {// do not rename this function. Treat this similarly to a Draw function
  let angleStep = (TWO_PI / tri_point) * 360;
 
 if (tri_point >0){
  for (let layer = 0; layer<layers; layer ++){
    let radius = size*(layer + 1);
      noFill();
      stroke(200, 200, 200, 200);
      strokeWeight(strokeThickness);
      ellipse(x, y, radius*2, radius*2);
    for (let i = 0; i<tri_point; i++){
     let angle = (angleStep*i);
     let tx = x +radius *cos (angle);
     let ty = y +radius *sin (angle);
     noStroke();
     fill(randomColor());
     drawTriangleAt(tx, ty, angle);
     }
    }
  }
}
