"use strict";


let skaicius = 0;

skaicius = 6;

//apsirasome kintamaji
//mes jam priskiriam reiksme
//me galim pakeisti kintamojo reiksme
//ir mes kintamaji isvedam

let dalybosRezultatas =  function dalyba(sk1=0,sk2=0) {
    let rezultatas;
    rezultatas = sk1/sk2;

    return rezultatas;
}

dalybosRezultatas = function patobulintaDalyba(sk1=0,sk2=0) {
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

