//your parameter variables go here!
let tri_point = 30;
let x  = 100;
let y = 100;
let size = 100;
function drawTriangleAt(tx, ty, angle) { 
  push();
  translate(tx, ty);
  rotate(angle*random());
  triangle(0, -15, -15, 10, 10, 10);
  pop();
}

function randomColor(){
  let r = random (255);
  let g = random (255);
  let b = random (255);
  return color (r, g, b);
}

function setup_wallpaper(pWallpaper) {
 pWallpaper.output_mode(DEVELOP_GLYPH);
//pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 200;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function
  let angleStep = (PI / tri_point) * 120;
 
 if (tri_point >0){
    for (let i = 0; i<tri_point; i++){
      let angle = (angleStep*i);
      let tx = x +size *cos (angle);
      let ty = y +size *sin (angle);
      randomColor();
      drawTriangleAt(tx, ty, angle);

 }
}
 
 
}
