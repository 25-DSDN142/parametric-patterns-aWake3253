let tri_point = 10; //allows user to change the amount of triangles in a layer
let size = 30; // allows user to change the spacing of the layers
let layers = 4; //allows user to change amount of concentric circle layers
let strokeThickness = 0; //allows user to change thickness of rings
let triangleScale = 4; //allows user to change size of triangle

function randomColorPalette(){ //allows user to edit/add colours to the color palette
let colorPalette = [
color(74, 219, 200, 180),
color(92, 171, 125, 180),
color(90, 147, 103, 180),
];
return colorPalette[int(random(colorPalette.length))];
}

function wallpaper_background() {
  background(68, 99, 63, 180); //changes background color
}
// set line 58 to green
// set line 52 to dark green

function drawTriangleAt(tx, ty, angle, s) {  //draws the triangle 
  push();
  translate(tx, ty);
  rotate(angle);
  scale(s);
  triangle(-3, -10, -10, 5, 5, 5);
  pop();
}
function setup_wallpaper(pWallpaper) {
 //pWallpaper.output_mode(DEVELOP_GLYPH);
 pWallpaper.output_mode(GRID_WALLPAPER);
 pWallpaper.resolution(A3);
 pWallpaper.show_guide(false); //set this to false when you're ready to print

 //Grid settings
 pWallpaper.grid_settings.cell_width  = 200;
 pWallpaper.grid_settings.cell_height = 200;
 pWallpaper.grid_settings.row_offset  = 300;
}

function my_symbol(x, y) { // sets up the tile layout
 if (tri_point >0){
  for (let layer = 0; layer<layers; layer ++){ 
    let radius = size*(layer + 1);
    for (let i = 0; i<tri_point; i++){//draws the triangle points around the ring
     let angle = (PI/tri_point*120*(i));
     let tx = x + radius *cos (angle);
     let ty = y + radius *sin (angle);
     noStroke();
     if (i % 3 === 0){ // makes every third triangle a specified color
      fill(60, 76, 60, 180)
     }else {fill(randomColorPalette());}
     drawTriangleAt(tx, ty, angle , triangleScale);
     }
      noFill();
      stroke(50, 70, 40, 250); //sets up the ring/concentric circle structure
      strokeWeight(strokeThickness);
      ellipse(x, y, radius*2, radius*2);
    }
  }
}
