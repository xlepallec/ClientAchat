function commencerEditerClient(client) {
    afficherFormulaireClient();
    document.getElementById("id").value = client.id;
    document.getElementById("prenom").value = client.prenom;
    document.getElementById("nom").value = client.nom;
    document.getElementById("boutonEdition").innerHTML = "Editer ce client";
    document.getElementById("boutonEdition").onclick = editerClient;
}

function editerClient() {
    var data = new FormData();

    var id = document.getElementById("id").value;
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var client = { id:id,nom: nom, prenom: prenom};
    data.append("client", JSON.stringify(client));

    var photo = document.getElementById("photo");
    if (photo.files.length>0)
        data.append("photo", photo.files[0]);

    fetch("api/clients/" + id, {
        method: "PUT", body: data
    }).then(response => rafraichirListeAchats())
        .catch(error => console.log("Erreur lors de la suppression du client " + error))
}

function ajouterClient() {
    var data = new FormData();

    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var client = {nom: nom, prenom: prenom};
    data.append("client", JSON.stringify(client));

    var photo = document.getElementById("photo");
    data.append("photo", photo.files[0]);
    fetch("api/clients", {
        method: 'POST', body: data
    })
        .then(response => {
            rafraichirListeAchats()
        })
        .catch(error => console.log("Erreur lors de l'ajout de ce client : " + error))


}

