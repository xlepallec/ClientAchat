
function rafraichirListeAchats() {
    afficherListeAchats();
    const today = new Date().toISOString().split('T')[0];
    fetch("api/achats/date?date=" + today, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).then(achats => remplirTableauAchats(achats)
    ).catch(error => console.log("Erreur lors du chargements des clients" + error))
}

function remplirTableauAchats(achats) {
    var table = document.getElementById("tbodyAchats");
    table.innerHTML = "";
    achats.forEach(achat => {
        var ligne = document.createElement("tr");
        ligne.setAttribute("scope", "row");
        var colDate = document.createElement("td");
        var colLibelle = document.createElement("td");
        var colMontant = document.createElement("td");
        var colClient = document.createElement("td");

        let date=new Date(achat.date);
        colDate.innerHTML = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        colLibelle.innerHTML = achat.libelle;
        colMontant.innerHTML = achat.montant;
        colClient.innerHTML = achat.client.nom + " " + achat.client.prenom;
        ligne.appendChild(colDate);
        ligne.appendChild(colLibelle);
        ligne.appendChild(colMontant);
        ligne.appendChild(colClient);
        table.appendChild(ligne);
    })
}