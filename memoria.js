var arreglo = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];

var estado = 
['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];

var turno = true;
var primer = 0;
var segundo = 0;
var pares = 0;
var puntos1 = 0;
var puntos2 = 0;
var tiros = 0;

a=new Array(8);
for (i=0; i<=7; i++) a[i]=new Array(8);
var jugador, pares;

function inicial()
{
    
    for(k=1; k<=99; k++){
       pos1 = Math.round(Math.random()*15);
        pos2 = Math.round(Math.random()*15);
        temporal = arreglo[pos1];
        arreglo[pos1] = arreglo[pos2];
        arreglo[pos2] = temporal;   
    }
    
    
    cont=0;
   for(i=0; i<=3; i++)
       {
           document.write("<tr align='center'>");
           for(j=0; j<=3;j++)
               {
                           document.write("<td><img src='cuadro.png' onmouseover='cross("+cont+")' onmouseout='noCross("+cont+")' onclick='tiro("+cont+")'></td>"); 
                            cont++;
                           a[j][i]=0;
               }
                document.write("<tr>");
                }
                document.f.jugador1.value = "0";
}
    
    
function cross(cont)
{
    if (estado[cont]==0)
        {
            document.images.item(cont).src="mira.png";
        }
}
function noCross(cont)
{
    //alert(col+","+ren+","+imagen);
    if (estado[cont]==0)
        {
            document.images.item(cont).src="cuadro.png";
        }
}

function tiro(cont)
{
    if(estado[cont] == 0){
        document.images.item(cont).src=arreglo[cont]+".jpg";
        estado[cont]=1;
        document.images.item(cont).src=arreglo[cont]+".jpg";
        
        tiros++;
        if(tiros == 1){ primer = cont;}
        if(tiros == 2){
            segundo = cont;
            evalua(primer,segundo);
        }
    }
    if(estado[cont] == 2){
        document.f.msg.value = "Felicidades! Tienes un par:)";
    }
    
    

}

function evalua(prim, sec){
    if(arreglo[prim] == arreglo[sec]){
        if(turno == true){
            puntos1 ++;
            document.f.jugador1.value = puntos1;
        }
        estado[prim] = 2;
        estado[sec] = 2;
        pares ++;
        tiros = 0;
        if(pares == 8)
            {
            alert("Felicidades! Has ganado:) Por favor registra tu nombre, y síguenos en Facebook: Fundación Tláloc para concursar por un premio"); 
            location.href="GanadorSKBXLM.html";
            }
    }
    
    if(arreglo[prim] != arreglo[sec]){
        
        tiros = 0;
        if(turno == true) play = 1;
        document.f.msg.value = "Par equivocado! Intenta otra vez";
        setTimeout(function regresar(){
            document.images.item(prim).src="cuadro.png";
            document.images.item(sec).src="cuadro.png";
            estado[prim] = 0;
            estado[sec] = 0;
            
            document.f.msg.value = "JUEGO DE MEMORIA";
            
        }, 1000);
        
        
    }
    
}