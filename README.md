# Tp-restaurant
Ce TP consiste à modifier le projet client pour qu'il affiche la liste des restaurants dans une table, avec la pagination. Ainsi qu’insérer, et modifier un restaurant. Sachant que la partie des web service est déjà préparé il ne faudrait qu’utiliser les web services existants.
en utilisant : - Vuejs
               - Mongodb
               - JavaScript
               - Html
               -Css


## Ce qui a été fait 

J’ai pu réaliser toute la partie CREUD dans partie Client à savoir :
-	Ajout 
-	Recherche
-	Modification
-	Suppression

je me suis amusé aussi à faire un tout petit peu du CSS  
### Client/javaScript

#### Les variables utilisées :

-	page: 0 : sert à définir le paramètre page que j’ai passé à l’URL 
-	nom : "" : c’est la variable qui récupère le nom de la page HTML pour faire l’ajout
-	cuisine: "" : : c’est la variable qui récupère la cuisine de la page HTML pour faire l’ajout

-	pagesize: 10 : sert à définir le paramètre pagesize que j’ai passé à l’URL et qui définit le nombre de restaurant que nous allons affiché     pour chaque page 
-	size: 10, : : c’est la variable qui récupère le nombre de ligne de la page HTML pour faire l’affichage, qui sera donner à pagesize en         suite 
-	nbrRestaurant:0, : c’est la variable qui sert à afficher le nombre des restaurants 
-	Uname: ""  : c’est la variable qui récupère le nom de la page HTML pour faire la modification
-	Ucuisine: "" : c’est la variable qui récupère la cuisine de la page HTML pour faire la modification
-	Uid: "" : c’est la variable qui récupère l’id de la page HTML pour faire la modification
-	nomRechercher: "" : c’est la variable qui récupère le nom de la page HTML pour faire la recherche 

#### Les méthodes utilisées :
-	pageSuivante: function () : permet de passer à la sélection suivante des listes des restaurants , et cela en incrémentant la variable       page , et ensuite appelé le web service  
-	pagePrecedent: function (): permet de passer à la sélection précédente des listes des restaurants , et cela en décrémentant la              variable page et en vérifiant si c’est la page 0 , si c’est le cas même si vous cloquer sur Précèdent vous restez sur la même liste 
-	nbrListe: function ():permet de choisir le nombre de ligne à la sélection des restaurants, et cela en initialisant la variable              pagesize par size 
-	 SupprimerElement: function (r): permet de supprimer un restaurants , et cela en récupérant son ID et en suite appelé le web service 
-	AjoutElement: function (event): permet d’ajouter un restaurants , et cela en récupérant les champs depuis le HTML  et ensuite appelé        le web service en lui donnant le formulaire en multiparts. puis je ferme le dialogue box de l’ajout
-	 counter: function(): permet d’appeler le service web COUNT pour renvoyer le nombre de restaurant existant dans la base de données 
-	ModifierElement: function (r):permet la récupération des champs à modifier avec le (r) surtout le id qui est affecté à la Uid, puis       j’appelle le dialogue box de la modification 
-	modifierOK: function():permet de faire la modification en récupérant les champs de la page HTML puis en appelant le web service PUT ,     puis je ferme le dialogue box de la modification 
-	dialogerAjou: function():j’appelle le dialogue box de l’ajout
-	chercherelem: function():permet de faire la recherche par le nom qui est récupéré par la variable nomRechercher et puis en appelant le     web service GET 
-	dialogerrecherche: function():j’appelle le dialogue box de la recherche
-	Annuler: function():je ferme le dialogue box de la recherche 


## ce qui n'a pas été fait 

je n'ai pas utilisé les librairies graphiques.

