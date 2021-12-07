function alerta(){
    var k1 = 0;
    var k2 = 0;

    var izena = document.getElementById('izena').value; /*Izena id-aren bidez*/
    if (/^Andoni/.test(izena)) { /* / / artean expresioa */
        k1 = 1;
    }

    var abizena = document.getElementById('abizena').value;
    if (/^Olabarria/.test(abizena)) {
        k2 = 1;
    }

    if (k1+k2!=2) {
        alert("Kaixo " + izena + " " + abizena + ", ez zara Andoni Olabarria");
    } else {
        alert("Ongi etorri jefe");
    }
}