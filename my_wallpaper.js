let tri_point = 30; //allows user to change the amount of triangles in a layer
let size = 40; // allows user to change the spacing of the layers
let layers = 3; //allows user to change amount of concentric circle layers
let strokeThickness = 10; //allows user to change thickness of
let triangleScale = 3; //allows user to change size of triangle
function randomColorPalette(){ //allows user to edit/add colours to the color palette
let colorPalette = [
color(255, 150, 50, 180),
color(215, 170, 50, 180),
color(255, 127, 50, 180),
color(255, 178, 37, 180),
];
return colorPalette[int(random(colorPalette.length))];

}
function drawTriangleAt(tx, ty, angle, s) {  //draws the triangle 
  push();
  translate(tx, ty);
  rotate(angle);
  if (layers>3){
    triangleScale = 1
  } else {scale(s)};
  triangle(-3, -10, -10, 5, 5, 5);
  pop();
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
function my_symbol(x, y) { // sets up the tile layout
 if (tri_point >0){
  for (let layer = 0; layer<layers; layer ++){ //sets up the ring/concentric circle structure
    let radius = size*(layer + 1);
      noFill();
      stroke(200, 200, 200, 200);
      strokeWeight(strokeThickness);
      ellipse(x, y, radius*2, radius*2);
    for (let i = 0; i<tri_point; i++){//draws the triangle points around the ring
     let angle = (PI/tri_point*120*(i));
     let tx = x + radius *cos (angle);
     let ty = y + radius *sin (angle);
     noStroke();
     if (i % 3 === 0){ // makes every third triangle a specified color
      fill(25, 25, 25, 250)
     } else {fill(randomColorPalette());}
     
     drawTriangleAt(tx, ty, angle , triangleScale);
     }
    }
  }
}
