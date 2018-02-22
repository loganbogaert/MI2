//******************************<vars>**********************************
var bool = true;
//******************************<function>******************************
function onLoad()
{
    // for lus voor 100 priemgetallen
    for(i=1;i<=1.0e+9;i++)
    {   
        // elk getal checken een for lus 
        for(b=2;b<i;b++){ if(i % b == 0) {bool = false; break;} }
        // zeggen of het een priemgetal is of niet
        if(bool) {document.write(i + "is een priemgetal");} else{document.write(i + "is geen priemgetal");}
        // bool terug op true zetten
        bool = true;
        // spatie op scherm
        document.write("<br>");
    }
}