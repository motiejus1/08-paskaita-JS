"use strict";let skaicius=0;skaicius=6;let dalybosRezultatas=function(t=0,l=0){let e;return e=t/l};dalybosRezultatas=function(t=0,l=0){let e;e=t/l;let s=[];return s[0]=t,s[1]=l,s[2]=e,s},console.log("Script veikia"),console.log(dalybosRezultatas(5,10));

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

