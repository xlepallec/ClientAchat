function initialiserInteractions() {
    conteneur = document.getElementById("conteneurInteractions");
    conteneurListeAchats = document.getElementById("conteneurListeAchats");

    formulaireAchat = document.getElementById("conteneurFormulaireAchat");
    formulaireClient = document.getElementById("conteneurFormulaireClient");
    listeClients = document.getElementById("listeClients");
    listeAchats = document.getElementById("listeAchats");
}

function retirerInteractions() {
    if (document.getElementById("conteneurFormulaireAchat") != null) {
        formulaireAchat.style.opacity = 0;
        //setTimeout(function () {
            conteneur.removeChild(formulaireAchat);
        //}, 1000);
    }
    if (document.getElementById("conteneurFormulaireClient") != null) {
        formulaireClient.style.opacity = 0;
        //setTimeout(function () {
            conteneur.removeChild(formulaireClient);
        //}, 1000);
    }
    if (document.getElementById("listeClients") != null) {
        listeClients.style.opacity = 0;
        //setTimeout(function () {
            conteneur.removeChild(listeClients);
        //}, 1000);
    }
    if (document.getElementById("listeAchats") != null) {
        listeAchats.style.opacity = 0;
        //setTimeout(function () {
            conteneurListeAchats.removeChild(listeAchats);
        //}, 1000);
    }
}

function afficherFormulaireAchat() {
    retirerInteractions();
    conteneur.appendChild(formulaireAchat);
    ["date", "libelle", "montant", "client"].forEach(function (id) {
        document.getElementById(id).value = "";
    });
    setTimeout(function () {
        formulaireAchat.style.opacity = 1;
    }, 100);
}

function afficherFormulaireClient() {
    retirerInteractions();
    conteneur.appendChild(formulaireClient);
    ["id", "nom", "prenom", "photo"].forEach(function (id) {
        document.getElementById(id).value = "";
    });
    document.getElementById("boutonEdition").onclick = ajouterClient;
    document.getElementById("boutonEdition").innerHTML = "Ajouter ce client";
    setTimeout(function () {
        formulaireClient.style.opacity = 1;
    }, 100);
}

function afficherListeClients() {
    retirerInteractions();
    conteneur.appendChild(listeClients);
    setTimeout(function () {
        listeClients.style.opacity = 1;
    }, 100);
}

function afficherListeAchats() {
    retirerInteractions();
    conteneurListeAchats.appendChild(listeAchats);
    setTimeout(function () {
        listeAchats.style.opacity = 1;
    }, 100);
}