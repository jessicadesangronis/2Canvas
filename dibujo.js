var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


function dibujoPorClick()
{
var x = parseInt(texto.value);
console.log(x);
alert ("No me toques ahi"+ x);
   
var lineas = x;
var l = 0;
var xi,xf,yi,yf = 0;
var colorcito = "#3365ff";
var lateral = 1;
var separacionLineas = ancho / lineas;

for (let lateral = 1; lateral < 5; lateral++) {
if (lateral==1)
{
l=0;
colorx="#FF333F";   // Rojo //
xi=1;
yf=299;
while (l<lineas) {
yi = l*separacionLineas;
xf = l*separacionLineas;
dibujarLinea (colorx, xi, yi, xf, yf);
l++;
}
}
else if (lateral==2)
{
l=0;
colorx="blue";   // Azul //
xf=299;
yi=299;
while (l<lineas) {
xi = (l*separacionLineas)+1;
yf = 300 - xi;
dibujarLinea (colorx, xi, yi, xf, yf);
l++;
}
}
else if (lateral==3)
{
l=0;
colorx="#33FF33"; // Verde //
xi=299;
yf=1;
while (l<lineas) {
xf = (300)-(l*separacionLineas)+1;
yi = xf;
dibujarLinea (colorx, xi, yi, xf, yf);
l++;
}
}
else
{
l=0;
colorx="#FF33B4"; // Futsia //
xf=1;
yi=1;
while (l<lineas) {
yf = (l*separacionLineas)+1;
xi = 300 - yf;
dibujarLinea (colorx, xi, yi, xf, yf);
l++;
}
}
}
 
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
}