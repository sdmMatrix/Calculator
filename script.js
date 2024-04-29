let num;
let prev;
let neww;



function n0(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML= prev + '0';
}

function n1(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '1';
}

function n2(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '2';
}

function n3(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '3';
}

function n4(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '4';
}

function n5(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '5';
}

function n6(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '6';
}

function n7(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '7';
}

function n8(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '8';
}

function n9(){
    prev = document.getElementById('display').innerHTML;
    newValue = document.getElementById('display').innerHTML=prev + '9';
}

//All clear
function ac(){
    prev = document.getElementById('display').innerHTML='0';
    
}

// wrong number Delete

function erase(){
    prev = document.getElementById('display').innerHTML;
    let erase = prev.slice(0, -1);
    let value = document.getElementById('display').innerHTML=erase;
}

// division

function division(){
    neww = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    num = 4;
}

//Multiflication

function multiflication(){
    neww = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    num = 3;
}

//add

function ad(){
    neww = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML=0;
    num=1;
}

//minaze

function mn(){
    neww = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    num = 2;
}

// Equlizer

function eqq(){
    let secondValue = document.getElementById('display').innerHTML;

    if (num == 1){
        document.getElementById('display').innerHTML = parseInt(neww) + parseInt(secondValue);
    }

    else if (num == 2){
        document.getElementById('display').innerHTML = parseInt(neww) - parseInt(secondValue);
    }

    else if (num == 3){
        document.getElementById('display').innerHTML = parseInt(neww) * parseInt(secondValue);
    }

    else if (num == 4){
        document.getElementById('display').innerHTML = parseInt(neww) / parseInt(secondValue);
    }
}

