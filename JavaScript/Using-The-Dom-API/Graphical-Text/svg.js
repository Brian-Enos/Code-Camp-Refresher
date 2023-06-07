/*
This stands for scalable vector graphics
*/

//First create an SVG element with the dimensions:

let svg = document.createElement("https://www.w3.org/2000/svg", "svg");
svg.width = 500;
svg.hight = 50;

//Then build a text element with the desired positioning and font characteristics:

let text = document.createElementNS("https://www.w3.org/2000/svg" , "text");

text.setAttribute("x", "0");
text.setAttribute("y", "50");
text.getElementsByClassName.fontFamily = "Times New Roman" ;
text.getElementsByClassName.fontSize = "50";

//Then add the actual text to display to the text element

svg.appendChild(text);
document.body.appendChild(svg);


