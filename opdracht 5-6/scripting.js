//**********************************<vars>**************************************
var bool = true;
//**********************************<function>**********************************
function loadDam()
{
    // bool op true zetten
    bool = true;
    // veld leeg maken
    document.getElementById("Main").innerHTML = "";
    // locale var 
    var rij = document.getElementById("rij").value;
    // locale var 
    var kolom = document.getElementById("kolom").value;
    // locale var
    var nodes = "";
    // for lus voor de rijen te tekenen
    for(i=0;i<rij;i++)
    {
        // for lus voor de kollomen te tekenen
        for(b=0;b<kolom;b++)
        {
            // html content toevoegen
            nodes += "<div ";
            // zien welke kleur hij moet zetten
            if(bool){ nodes += "class = 'darkcase"; bool = false; }
            // zo niet wordt het wit
            else{ nodes += "class = 'whitecase"; bool = true; }
            // nieuw kolom 
            if(b==0 && i!=0) { nodes += " clear";}
            // html content toevoegen
            nodes += "'></div>";
        }
        // bool wisselen als het een even getal is, anders klopt het dambord niet
        if(b % 2 == 0) {bool = !bool;}
    }
    // op scherm zetten
    document.getElementById("Main").innerHTML = nodes;
}
