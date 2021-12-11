function alerta(){
    var k1 = 0;
    var k2 = 0;
    var k3 = 0;
    var k4 = 0;
    var k5 = 0;

    var izena = document.getElementById('izena').value; /*Izena id-aren bidez*/
    if (/^[A-Za-z]+$/.test(izena)) { /* / / artean expresioa */
        k1 = 1;
    }

    var abizena = document.getElementById('abizena').value;
    if (/^[A-Za-z]+$/.test(abizena)) {
        k2 = 1;
    }

    var emaila = document.getElementById('emaila').value;
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emaila)) {
        k3 = 1;
    }

    var jaiotzeData = document.getElementById('jaiotzeData').value;
    if (/([0-9]{4})\/([0-9]{2})\/([0-9]{2})/.test(jaiotzeData)) {
        k4 = 1;
    }

    var nan = document.getElementById('nan').value;
    if (/[0-9]{8}[A-Za-z]{1}/.test(nan)) {
        k5 = 1;
        letraEgiaztatu(nan);
    }

    var ktot = k1 + k2 + k3 + k4 + k5;
    if (ktot!=5) {
        alert("Kaixo " + izena + " " + abizena + ", " +  emaila + " postarekin" + " eta " + jaiotzeData + " datan jaioa" + nan + " zenbakiarekin" +", ez zara Andoni Olabarria");
    } else {
        alert("Ongi etorri jefe");
    }
}

function letraEgiaztatu(dni) {
    var array = [];
    array = dni.split("");
    let letra = array[8];
    alert(array.join(''));
    alert(letra);
    array.pop();
    alert(array.join(''));
    let nanznb = array.join('').parseInt();
    alert(nanznb.toString()); //Cuidao aquí
}
/*
    var array = JSON.parse("[" + dni + "]");
    var letra = array[9];
    array.splice(9,1);
    var zenb = "array[1]"+"array[2]"+"array[3]"+"array[4]"+"array[5]"+"array[6]"+"array[7]"+"array[8]";
    var zenbakia = toLowerCase(parseInt(zenb,10));
    var letrak = [t,r,w,a,g,m,y,f,p,d,x,b,n,j,z,s,q,v,h,l,c,k,e];
    var pos = (zenbakia%23)+1;
    if (letrak[pos] == letra ){
        return 1;
    }
    else{
        return 0;
    }
*/