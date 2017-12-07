
/*Technique 1*/
/*function fibo(n)
{
   if (n<2) return n;
   else return fibo(n-2) + fibo(n-1);
}
for(var i=0; i<20; i++)
{
  document.write("Le " + (i+1) + "e nombre de la suite de Fibonacci est " + fibo(i));
}*/


/*Technique 2*/
var fibo = [0, 1];
function fibonachitos(){
     var suite = fibo[fibo.length-1]+fibo[fibo.length-2];
     fibo.push(suite);
     return fibo;
}
for (n = prompt("Tu dis combien Coco y paie !");n > 0; n--) {
document.getElementById("resultat").innerHTML=fibonachitos()	;
}