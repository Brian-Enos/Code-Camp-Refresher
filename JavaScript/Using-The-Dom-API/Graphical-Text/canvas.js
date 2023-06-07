
/*
HTML provides the canvas element for building raster-based images
*/

// first buil a canvas for holding the image pixel infoemation

let canvas = document.createElement("canvas");

canvas.width =  500;
canvas.height = 250;

//Then select a context for the canvas, in this case two-dimensional 

let context = canvas.getContext("2d");

//Then set properties related to the text

context.font = "30px Cursive" ;
context.fillerText("Hello World!", 50, 50);

//Then insert the canvas element to the page to take effect

document.body.appendChild(canvas);

/*
Using the context, we write the text "Hello World!" on the canvas at the position (50, 50). This is where the text will appear on the canvas.
*/
