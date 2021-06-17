
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


//ES5
const daugybaes5 = function(sk1, sk2) {

    //this
    let rezultatas;
    rezultatas = sk1*sk2;
    console.log(this);
    return rezultatas;
}

//Es6 funckija 
const daugybaes6 = (sk1, sk2) => {
    let rezultatas;
    rezultatas = sk1*sk2;
    console.log(this);
    return rezultatas;
}


console.log(daugybaes5(2,4));
console.log(daugybaes6(2,4));

//ES5
window.addEventListener("load", daugybaes5);
document.getElementById("buttones5").addEventListener("click", )


//ES6

window.addEventListener("load", daugybaes6);



