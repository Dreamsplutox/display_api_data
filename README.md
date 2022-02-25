### Express dummy API
Appli express qui va nous fournir des dictionnaires JSON test (informations dummy) pour l'application principale.

Ces JSON ce présenterons de cette manière : 
{
	id_commande : 10200,
	liste_articles : {
		nom : "articleA",
		quantite : 5
	},
	{
		nom : "articleB",
		quantite : 2
	}
}


Ce dictionnaire sera disponible après que l'url suivante ait été requetée :

http://localhost:8085/detail_commande/{{id_commande}}

où id_commande sera une entrée utilisateur

note : Quand une commande n'existe pas, une string 404 est renvoyée

