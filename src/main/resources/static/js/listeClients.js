function rafraichirListeClients() {
    afficherListeClients();
    fetch("api/clients", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: null
    }).then(response => {
        return response.json();
    }).then(clients => remplirTableauClients(clients)
    ).catch(error => console.log( "Erreur lors du chargements des clients" + error))
}

function remplirTableauClients(clients) {
    var table = document.getElementById("tbodyClients");


    table.innerHTML = "";
    clients.forEach(client => {
        var ligne = document.createElement("tr");
        ligne.setAttribute("scope", "row");
        var colId = document.createElement("td");
        colId.className = "hover-cell";
        colId.innerHTML = client.id + "";

        var boutonEfface = document.createElement("i");
        boutonEfface.className = "bi bi-trash hover-button";
        boutonEfface.onclick = function () {
            supprimerClient(client);
        };
        colId.appendChild(boutonEfface);

        var boutonEdition = document.createElement("i");
        boutonEdition.className = "bi bi-pen hover-button";
        boutonEdition.onclick = function () {
            commencerEditerClient(client);
        };

        colId.appendChild(boutonEdition);
        var colPrenom = document.createElement("td");
        var colNom = document.createElement("td");
        var colPhoto = document.createElement("td");

        colPrenom.innerHTML = client.prenom;
        colNom.innerHTML = client.nom;
        if (client.photo != null) {
            var photo = document.createElement("img");
            photo.src = `data:image;base64,${client.photo}`;//`data:image/jpeg;base64,${client.photo}`;
            photo.setAttribute("height", "100px");
            colPhoto.appendChild(photo);
        }
        ligne.appendChild(colId);
        ligne.appendChild(colPrenom);
        ligne.appendChild(colNom);
        ligne.appendChild(colPhoto);
        table.appendChild(ligne);
    })
}

function supprimerClient(client) {
    fetch("api/clients/" + client.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: null
    }).then(response => rafraichirListe())
        .catch(error => console.log("Erreur lors de la suppression du client " + error))
}

