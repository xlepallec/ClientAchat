function demarrerAjoutAchat() {
    afficherFormulaireAchat();
    chargerListeClients();
}

function ajoutAchat() {
    document.getElementById("date").valueAsDate = new Date();
    var achatForm = document.getElementById("AjoutAchatForm");
    var achat = {
        date: document.getElementById("date").valueAsDate,
        montant: document.getElementById("montant").value,
        libelle: document.getElementById("libelle").value
    }
    var clientId = document.getElementById("client").value;
    fetch("api/achats/client/" + clientId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(achat)
    })
        .then(response =>
            rafraichirListeAchats()
        )
        .catch(error => console.log(error))
}

function chargerListeClients() {
    fetch("api/clients", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: null
    })
        .then(response => {
            return response.json()
        })
        .then(clients =>
            remplirSelectClients(clients)
        )
        .catch(error => console.log(error))
}

function remplirSelectClients(clients) {
    var premier = null;
    var select = document.getElementById("client");
    select.innerHTML = "";
    clients.forEach(client => {
        if (premier == null) {
            premier = client.id;
        }
        var option = document.createElement("option");
        option.setAttribute("value", client.id);
        option.innerHTML = client.nom + " " + client.prenom;
        select.appendChild(option);
    })
    select.value = premier;
}

function retirerFormulaireAchatPremiereFois() {
    conteneurFormulaireAchat = document.getElementById("conteneurFormulaireAchat");
    parentConteneurFormulaire = conteneurFormulaire.parentNode;
    parentConteneurFormulaire.removeChild(conteneurFormulaire);
}

function afficherFormulaire() {
    parentConteneurFormulaire.appendChild(conteneurFormulaire);
    setTimeout(function () {
        conteneurFormulaire.style.opacity = 1;
    }, 100);
}
function retirerFormulaire() {
    ["id","nom","prenom","photo"].forEach(function(id){document.getElementById(id).value="";});
    conteneurFormulaire.style.opacity=0;
    setTimeout(function() {parentConteneurFormulaire.removeChild(conteneurFormulaire);}, 1000);
}