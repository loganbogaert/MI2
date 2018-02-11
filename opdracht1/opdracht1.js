//**********************************<vars>*************************************
var getal = "";
var getallen = [];
var teken;
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
   // als getal niet gelijk is aan 0 of leeg
   if(waarde!="0" || getal!="")
   {
        // als tekst toevoegen
       getal = getal + waarde;
       // opscherm zetten
       toonOpScherm(waarde,"");
   }
}
//**********************************<function>*********************************
function voegTek(waarde)
{
   // string leeg maken wanneer nodig 
   if(bool){document.getElementById("uitvoer").innerHTML="";}
    
   else
   {
        // als getal leeg is
        if(getal!="")
        {
           // getal in array steken
           getallen.push(getal);
           // teken in array steken
           getallen.push(waarde);
           // getal op 0 zetten
           getal = "";
        }
        // teken vervangen
        else{getallen[getallen.length-1] = waarde;}
        // op scherm zetten
        toonOpScherm(waarde,"");
   }
}
//**********************************<function>*********************************
function toon()
{
     // veld leeg maken
     document.getElementById("uitvoer").innerHTML = "";
    // for lus om array op scherm te zetten
    for(i=0;i<getallen.length;i++){document.getElementById("uitvoer").innerHTML += getallen[i];}
    // laatste getal op scherm zetten
    document.getElementById("uitvoer").innerHTML += getal;
}
//**********************************<function>*********************************
function toonOpScherm(waarde,antwoord)
{
    // waarde toevoegen aan de berekening
    if(antwoord=="")
    {
        // als de array leeg is 
        if(getallen.length==0){document.getElementById("uitvoer").innerHTML += waarde;}
        // als het niet het geval is 
        else{toon();}
    }
    // antwoord op scherm zetten 
    else{document.getElementById("uitvoer").innerHTML = antwoord;}
}
//**********************************<function>*********************************
function bereken()
{
    // getal in array steken
    getallen.push(getal);
    // getal op 0 zetten
    getal = "";
    // var maken
    var berekening = "";
    // alles in een var steken
    for(i=0;i<getallen.length;i++){berekening += getallen[i].toString();}
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
    // als de array niet leeg is
    if(getallen.length>0)
    {
        // als getal leeg is 
       if(getal=="") { getallen.pop(); getal = getallen.pop();}
       // zo niet wordt er een caracter afgetrokken
       else{getal = getal.slice(0,-1);}
    }
    // een caracter weg doen
    else{getal = getal.slice(0,-1);}
    // functie oproepen
    toon();
}
//**********************************<function>*********************************
function verwijderAlles()
{
    // array clearen
    getallen = [];
    // getal leeg maken 
    getal = "";
    // functie oproepen
    toon();
}
