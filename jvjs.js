        // Afficher le cercle de chargement
        var loadingCircle = document.getElementById("loadingCircle");
        loadingCircle.style.display = "block";

        // Attendre 2 secondes (2000 millisecondes) avant d'afficher le contenu de la page
        setTimeout(function() {
            loadingCircle.style.display = "none";
            var pageContent = document.getElementById("pageContent");
            pageContent.style.display = "block";
        }, 1500); // 2000 ms = 2 secondes
