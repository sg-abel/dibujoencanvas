var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yi, xf, yf;
var colorcito = "red";
var color="#b80003";

for(l = 0; l < lineas; l ++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(color, 0, yi, xf, 300);   
}

for(l = 0; l < lineas; l ++)
{
    yi = 300 - (10 * l);
    xf = 10 * l;
    dibujarLinea(color, 299, yi, xf, 299);   
}

for(l = 0; l < lineas; l ++)
{
    xi = 300 - (10 * l);
    yf = 10 * l;
    dibujarLinea(color, xi, 0, 0, yf);   
}

for(l = 0; l < lineas; l ++)
{
    xi = 10*l;
    yf = 10 * l+1;
    dibujarLinea(color, xi, 0, 299, yf);   
}



dibujarLinea("colorcito",1,1,1,299)
dibujarLinea("colorcito",1,299,299,299)
dibujarLinea("colorcito",299,299,299,1)
dibujarLinea("colorcito",299,1,1,1)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

