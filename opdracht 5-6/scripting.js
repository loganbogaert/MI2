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
    var node;
    // for lus voor de rijen te tekenen
    for(i=0;i<rij;i++)
    {
        // for lus voor de kollomen te tekenen
        for(b=0;b<kolom;b++)
        {
            // div aanmaken
            node = document.createElement("div");
            // zien welke kleur hij moet zetten
            if(bool){ node.classList.add("darkcase"); bool = false; }
            // zo niet wordt het wit
            else{ node.classList.add("whitecase"); bool = true; }
            // nieuw kolom 
            if(b==0 && i!=0) {node.classList.add("clear");}
            // toevoegen op scherm
            document.getElementById("Main").appendChild(node);
        }
        // bool wisselen als het een even getal is, anders klopt het dambord niet
        if(b % 2 == 0) {bool = !bool;}
    }
}