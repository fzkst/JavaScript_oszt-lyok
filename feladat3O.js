class Etel{
    #nev;
    #ar;
    #kategoria;
    #osszetevok;

    constructor(nev, ar, kategoria, osszetevok){
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

function felvetel(){
    let nev = document.getElementById('nev').value;
    let ar = document.getElementById('ar').value;
    let kategoria = document.getElementById('kategoria').value;
    let osszetevok = document.getElementById('osszetevok').value;
    var etel = new Etel(nev, ar, kategoria, osszetevok);
    etelek.push(etel);
    console.table(etelek);
    tabla();
}

function feltolt(){
    var szoveg = "";
    for (let i = 0; i < etelek.length; i++){
        szoveg = szoveg + "<tr><td></td><td></td><td></td><td></td></tr>"
    }
    return szoveg;
}

function tabla(){
    if (document.getElementsByTagName('table').length > 0){
        document.getElementsByTagName('table')[0].remove();
    }
    szoveg = feltolt();
    var tab = document.createElement('table');
    tab.innerHTML = '<tr><th class="text-center">Név</th><th class="text-center">Ár</th><th class="text-center">Kategória</th><th class="text-center">Összetevők</th></tr>' + szoveg;
    document.body.appendChild(tab);
    for (var i = 0; i < etelek.length; i++){
        document.getElementsByTagName('td')[i * 4].innerText = etelek[i].Nev;
        document.getElementsByTagName('td')[i * 4 + 1].innerText = etelek[i].Ar;
        document.getElementsByTagName('td')[i * 4 + 2].innerText = etelek[i].Kategoria;
        document.getElementsByTagName('td')[i * 4 + 3].innerText = etelek[i].Osszetevok;
    }
    
}

