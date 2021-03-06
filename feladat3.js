class Etel {
    #nev;
    #ar;
    #kategoria;
    #osszetevok;

    constructor(nev, ar, kategoria, osszetevok) {
        this.#nev = nev;
        this.#ar = ar;
        this.#kategoria = kategoria;
        this.#osszetevok = osszetevok;
    }

    get Nev() {
        return this.#nev;
    }

    get Ar() {
        return this.#ar;
    }

    get Kategoria() {
        return this.#kategoria;
    }

    get Osszetevok() {
        return this.#osszetevok;
    }
}

var etelek = [];

function felvetel() {
    let nev = document.getElementById('nev').value;
    let ar = document.getElementById('ar').value;
    let kategoria = document.getElementById('kategoria').value;
    let osszetevok = []
    // var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    // for (var i = 0; i < checkboxes.length; i++) {
    //     osszetevok.push(checkboxes[i].value)
    // }
    $("input:checkbox[name=osszetevok]:checked").each(function(){
        osszetevok.push($(this).val());
    });
    var etel = new Etel(nev, ar, kategoria, osszetevok);
    etelek.push(etel);
    tabla();
    kategoriaTabla();
}

function feltolt() {
    var szoveg = "";
    for (let i = 0; i < etelek.length; i++) {
        szoveg = szoveg + "<tr><td></td><td></td><td></td><td></td></tr>"
    }
    return szoveg;
}

function kategoriaTablaFeltolt() {
    var szoveg = "";
    for (let i = 0; i < etelek.length; i++) {
        szoveg = szoveg + "<tr><td></td><td></td><td></td><td></td></tr>"
    }
    return szoveg;
}

function tabla() {
    if (document.getElementsByTagName('table').length > 0) {
        document.getElementsByTagName('table')[0].remove();
    }
    szoveg = feltolt();
    var tab = document.createElement('table');
    tab.innerHTML = '<tr><th class="text-center"></th><th class="text-center">Ár</th><th class="text-center">Kategória</th><th class="text-center">Összetevők</th></tr>' + szoveg;
    document.body.appendChild(tab);
    for (var i = 0; i < etelek.length; i++) {
        document.getElementsByTagName('td')[i * 4].innerText = etelek[i].Nev;
        document.getElementsByTagName('td')[i * 4 + 1].innerText = etelek[i].Ar;
        document.getElementsByTagName('td')[i * 4 + 2].innerText = etelek[i].Kategoria;
        document.getElementsByTagName('td')[i * 4 + 3].innerText = etelek[i].Osszetevok;
    }

}

function kategoriaTabla() {
    if (document.getElementsByTagName('table2').length > 0) {
        document.getElementsByTagName('table2')[0].remove();
    }
    szoveg = kategoriaTablaFeltolt();
    var tab2 = document.createElement('table2');
    tab2.innerHTML = '<tr><th class="text-center">Leves</th><th class="text-center">Főétel</th><th class="text-center">Pizza</th><th class="text-center">Egyéb</th></tr>' + szoveg;
    document.body.appendChild(tab2);
    for (var i = 0; i < etelek.length; i++) {
        if (etelek[i].Kategoria == "Leves") {
            document.getElementsByTagName('td')[i * 8].innerText = etelek[i].Nev;
        } else if (etelek[i].Kategoria == "Főétel") {
            document.getElementsByTagName('td')[i * 8 + 1].innerText = etelek[i].Nev;
        } else if (etelek[i].Kategoria == "Pizza") {
            document.getElementsByTagName('td')[i * 8 + 2].innerText = etelek[i].Nev;
        } else if (etelek[i].Kategoria == "Egyéb") {
            document.getElementsByTagName('td')[i * 8 + 3].innerText = etelek[i].Nev;
        }                
        
    }

}



