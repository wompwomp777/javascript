console.log
// 1. Testu-Aldatzailea
function aldatuTestua() {
    const parrafo = document.getElementById("testu_aldagarria");
    parrafo.textContent = "Testua aldatu da!";
    }

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
function aldatuKolorea() {
    const p = document.getElementById("kolore_aldagarria");
    if (p.style.color === "red") {
            p.style.color = "black";
        } else {
            p.style.color = "red";
        }
    }

// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
const p = document.getElementById("ezkutatu_hau");

    // Si está escondido, mostrarlo. Si está visible, esconderlo.
    if (p.style.display === "none") {
        p.style.display = "block"; // se vuelve a mostrar
    } else {
        p.style.display = "none"; // se esconde
    }
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
    const zenbaki1 = document.getElementById("zenbaki1").value;
    const zenbaki2 = document.getElementById("zenbaki2").value;
    const emaitza = Number(zenbaki1) + Number(zenbaki2);
    document.getElementById("emaitza4").textContent = emaitza;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
    const input = document.getElementById("elementu_berria");
    const testua = input.value.trim();
    if (testua !== "") {
        const li = document.createElement("li");
        li.textContent = testua;
        document.getElementById("zerrenda_dinamikoa").appendChild(li);
        input.value = "";
    } else {
        alert("Mesedez, idatzi zerbait gehitzeko.");
    }
}

// 6. Kontagailua (aldagai globalak erabiliz)
// Oharra: klikKopurua HTML amaierako <script> blokean hasieratuta dago
let klikKopurua = 0;
function kontatuKlik() {
    klikKopurua++;
    document.getElementById("kontagailu_emaitza").textContent = klikKopurua;
}

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
let zenbakiSekretua = Math.floor(Math.random() * 5) + 1;
function konprobatuZenbakia() {
    const sartutakoa = Number(document.getElementById("asmatutako_zenbakia").value);
    const emaitza = document.getElementById("joko_emaitza");
    if (sartutakoa < 1 || sartutakoa > 5 || isNaN(sartutakoa)) {
        emaitza.textContent = "Idatzi zenbaki bat 1 eta 5 artean!";
        emaitza.style.color = "orange";
        return;
}
    if (sartutakoa === zenbakiSekretua) {
        emaitza.textContent = "Asmatu duzu! Zenbakia " + zenbakiSekretua + " zen!";
        emaitza.style.color = "green";
} else {
        emaitza.textContent = "Ez duzu asmatu. Saiatu berriro!";
        emaitza.style.color = "red";
    }
    document.getElementById("asmatutako_zenbakia").value = "";
}


// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
    const koloreak = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender", "orange", "white"];
    const ausazkoKolorea = koloreak[Math.floor(Math.random() * koloreak.length)];
    document.body.style.backgroundColor = ausazkoKolorea;
}