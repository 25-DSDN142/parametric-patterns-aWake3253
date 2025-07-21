//your parameter variables go here!
let tri_point = 30;
let x  = 100;
let y = 100;
let size = 80;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
 // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 200;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function
  
  for (let i = 0; i<tri_point; i++){
    let angle = (PI/tri_point*120*(i));
    let tx = x +size *cos (angle);
    let ty = y +size *sin (angle);

    push();
    translate(tx, ty);
    rotate(angle);
    triangle(0, -15, -15, 10, 10, 10);

  pop();
}
}