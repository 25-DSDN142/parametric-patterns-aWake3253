//your parameter variables go here!
let tri_point = 20;
let size = 40;
let layers = 2;
let strokeThickness = 5;
let triangleScale = 3;


function drawTriangleAt(tx, ty, angle, s) { 
  push();
  translate(tx, ty);
  rotate(angle);
  if (layers>3){
    triangleScale = 1
  } else (scale(s));
  triangle(-3, -10, -10, 5, 5, 5);
  pop();
}

function randomColorPalette(){
let colorPalette = [
color(255, 100, 50, 180),
color(215, 170, 50, 180),
color(255, 127, 50, 180),
color(255, 178, 37, 180),
];
return colorPalette[int(random(colorPalette.length))];

}
function setup_wallpaper(pWallpaper) {
 //pWallpaper.output_mode(DEVELOP_GLYPH);
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
  let angleStep = (TWO_PI / tri_point);
 
 if (tri_point >0){
  for (let layer = 0; layer<layers; layer ++){
    let radius = size*(layer + 1);
      noFill();
      stroke(200, 200, 200, 200);
      strokeWeight(strokeThickness);
      ellipse(x, y, radius*2, radius*2);
    for (let i = 0; i<tri_point; i++){
     let angle = (PI/tri_point*120*(i));
     let tx = x + radius *cos (angle);
     let ty = y + radius *sin (angle);
     noStroke();
     fill(randomColorPalette());
     drawTriangleAt(tx, ty, angle, triangleScale);
     }
    }
  }
}
