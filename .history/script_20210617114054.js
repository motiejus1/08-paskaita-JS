
"use strict";


let skaicius = 0;

skaicius = 6;

//apsirasome kintamaji
//mes jam priskiriam reiksme
//me galim pakeisti kintamojo reiksme
//ir mes kintamaji isvedam

let dalybosRezultatas =  function(sk1=0,sk2=0) {
    let rezultatas;
    rezultatas = sk1/sk2;

    return rezultatas;
}

dalybosRezultatas = function(sk1=0,sk2=0) {
    let rezultatas;
    rezultatas = sk1/sk2;

    let masyvas = [];
    masyvas[0]= sk1;
    masyvas[1]= sk2;
    masyvas[2] = rezultatas;
    return masyvas;
}


console.log("Script veikia");

console.log(dalybosRezultatas(5,10));

let daugyba = function(sk1, sk2) {
    let rezultatas;
    rezultatas = sk1/sk2;

    return rezultatas;
}

