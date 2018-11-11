window.onload = init;

function init() {
    new Vue({
        el: '#app',
        data: {
            Restaurants: [0, 1],
            input: "",
            page: 0,
            nom: "",
            cuisine: "",
            pagesize: 10,
            size: 10,
            nbrRestaurant:0,
            Cname: "",
            Ctype: "",
            Uname: "",
            Ucuisine: "",
            Uid: "",
            nomRechercher: ""
        },
        mounted() {
            console.log("--- MOUNTED, appelée avant le rendu de la vue ---");
            this.getDataFromWebService();
        },
        methods: {

            getDataFromWebService: function () {
                let url = "http://localhost:8089/api/Restaurants?page=" + this.page + "&pagesize=" + this.pagesize;

                fetch(url).then((data) => {
                    console.log("les données sont arrivées !")
                    return data.json();
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    this.Restaurants = dataEnJavaScript.data;
                });
                this.counter();
            },
            addTodo: function () {
                this.Restaurants.push({ title: this.input });
                //this.Restaurants.push(this.Restaurants.length)
                this.input = "";
            },
            removeTodo: function (index) {
                //console.log(index)
                this.Restaurants.splice(index, 1);
            },
            getColor: function (index) {
                return (index % 2) ? 'red' : 'green';
            },
            pageSuivante: function () {
                this.page++;
                let url = "http://localhost:8089/api/Restaurants?page=" + this.page + "&pagesize=" + this.pagesize;

                fetch(url).then((data) => {
                    console.log("les données sont arrivées !")
                    return data.json();
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    this.Restaurants = dataEnJavaScript.data;
                    console.log("je suis à la page " + this.page)

                });
            },
            pagePrecedent: function () {
                if (this.page >= 1) {
                    this.page--;
                    let url = "http://localhost:8089/api/Restaurants?page=" + this.page + "&pagesize=" + this.pagesize;

                    fetch(url).then((data) => {
                        console.log("les données sont arrivées !")
                        return data.json();
                    }).then((dataEnJavaScript) => {
                        // ici on a bien un objet JS
                        this.Restaurants = dataEnJavaScript.data;
                        console.log("je suis à la page " + this.page)
                    });
                }
                else {
                    let url = "http://localhost:8089/api/Restaurants?page=0"

                    fetch(url).then((data) => {
                        console.log("les données sont arrivées !")
                        return data.json();
                    }).then((dataEnJavaScript) => {
                        // ici on a bien un objet JS
                        this.Restaurants = dataEnJavaScript.data;
                        console.log("je suis à la page " + this.page + " et c'est la fin")
                    });
                }
            },
            nbrListe: function () {
                this.pagesize = this.size;
                let url = "http://localhost:8089/api/Restaurants?page=" + this.page + "&pagesize=" + this.pagesize + "&name=" +this.nomRechercher;

                fetch(url).then((data) => {
                    console.log("les données sont arrivées !")
                    return data.json();
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    this.Restaurants = dataEnJavaScript.data;
                });
            },
            SupprimerElement: function (r) {
                console.log(r.name);
                console.log(r.cuisine);
                console.log(r._id);
                fetch("http://localhost:8089/api/Restaurants/" + r._id, {
                    method: "DELETE",
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    this.getDataFromWebService();
                    
                });
                alert('Element supprimer !!');
            },
            ModifierElement: function (r) {
                console.log(r.name);
                console.log(r.cuisine);
                console.log(r._id);
                this.Cname=r.name;
                this.Ctype=r.cuisine;
                this.Uid = r._id;
                document.getElementById('dialog').showModal();

            },
            AjoutElement: function (event) {
                event.preventDefault();
                var data = new FormData();
                data.append("nom", this.nom);
                data.append("cuisine", this.cuisine);
                
                fetch("http://localhost:8089/api/Restaurants/", {
                    method: "POST",
                    body: data
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    console.log("Method: AjoutElement, {cuisine: +"+this.cuisine+", nom: "+this.nom);
                    this.getDataFromWebService();

                });
                alert('Element Ajouter !!');
                document.getElementById('dialog1').close()
            },
            counter: function(){
                let url = "http://localhost:8089/api/Restaurants/count";
                fetch(url).then((data) => {
                    console.log("les données sont arrivées !")
                    return data.json();
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    this.nbrRestaurant = dataEnJavaScript.data;
                });
            },
            modifierOK: function(){
                document.getElementById('dialog').close();
                console.log(this.Uname);
                console.log(this.Ucuisine);
                console.log(this.Uid);
                var data = new FormData();
                data.append("nom", this.Uname);
                data.append("cuisine", this.Ucuisine);
                fetch("http://localhost:8089/api/Restaurants/" + this.Uid, {
                    method: "PUT",
                    body: data
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    this.getDataFromWebService();
                   
                });
                alert('Element modifier !!');
            },
            dialogerAjou: function(){
                document.getElementById('dialog1').showModal();
            },
            chercherelem: function(){
                let url = "http://localhost:8089/api/Restaurants?page=" + this.page + "&pagesize=" + this.pagesize+ "&name=" +this.nomRechercher;

                fetch(url).then((data) => {
                    console.log("les données sont arrivées !")
                    return data.json();
                }).then((dataEnJavaScript) => {
                    // ici on a bien un objet JS
                    this.Restaurants = dataEnJavaScript.data;
                });
                this.counter();

            },
            dialogerrecherche: function(){
               document.getElementById('dialog2').showModal();
            },
            Annuler: function(){
               document.getElementById('dialog2').close();
            }
        }
    })
}
