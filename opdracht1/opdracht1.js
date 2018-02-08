//**********************************<vars>*************************************
var getal = "";
var getallen = [];
var aantal = 1;
var teken;
var antwoord;
var bool = false;
//**********************************<function>*********************************
function telOp(getaleen, getaltwee)
{
     return parseInt(getaleen) + parseInt(getaltwee);
}
//**********************************<function>*********************************
function trekAf(getaleen, getaltwee)
{
     return parseInt(getaleen) - parseInt(getaltwee);
}
//**********************************<function>********************************
function vermenigvuldig(getal1een, getaltwee)
{
     return parseInt(getaleen) * parseInt(getaltwee);
}
//**********************************<function>*********************************
function deeling(getaleen, getaltwee)
{
     return parseInt(getaleen) / parseInt(getaltwee);
}
//**********************************<function>*********************************
function voegWaarde(waarde)
{
   // string leeg maken wanneer nodig 
   if(bool){document.getElementById("uitvoer").innerHTML=""; bool = false;}
   // als tekst toevoegen
   getal = getal + waarde;
   // opscherm zetten
   toonOpScherm(waarde,"");
}
//**********************************<function>*********************************
function voegTek(waarde)
{
    // getal in array steken
    getallen.push(getal);
    // teken in array steken
    getallen.push(waarde);
    // getal op 0 zetten
    getal = "";
    // opscherm zetten
   toonOpScherm(waarde,"");
}
//**********************************<function>*********************************
function toonOpScherm(waarde,antwoord)
{
    if(antwoord=="")
    {
       document.getElementById("uitvoer").innerHTML += waarde;
    }
    else
    {
       document.getElementById("uitvoer").innerHTML = antwoord;
    }
}
//**********************************<function>*********************************
function bereken()
{
    // getal in array steken
    getallen.push(getal);
    // getal op 0 zetten
    getal = "";
    // var maken
    var berekening ="";
    // alles in een var steken
    for(i=0;i<getallen.length;i++)
    {
        berekening += getallen[i].toString();
    }
    // bereking berekeken
    berekening = eval(berekening);
    // op scherm zetten
    toonOpScherm("",berekening);
    // bool op true zetten
    bool = true;
    // array clearen
    getallen = [];
}
//**********************************<function>*********************************
function verwijder()
{
    // als de array niet bestaat
    if(getallen.length==0){getal = getal.slice(0,-1);}
    // als de array wel bestaat 
    else
    {
        // wanneer getal nog niet leeg is 
        if(getal!="")
        {
            // getal met een caracter verwijderen
            getal = getal.slice(0,-1);   
        }
        else
        {
           // uit array halen
           getal = getallen[getallen.length-1];
           // getal met een caracter verwijderen
           getal = getal.slice(0,-1);
           // uit array verwijderen
           if(getal=="") {getallen.pop();}
        }
    }
    // uitvoer halen
    var uitvoer = document.getElementById("uitvoer").innerHTML;
    // laatste cijfer op scherm weg doen
    document.getElementById("uitvoer").innerHTML = uitvoer.slice(0,-1);
}