const express = require('express'),
  app = express(),
  fs = require('fs'),
  shell = require('shelljs');

app.get('/', (req, res) => res.send('Bienvenue sur Express dummy API'));

app.get('/detail_commande/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("commande "+req.params.id);
  // Génération du dictionnaire dummy
  var dummy_dict = {
    'id_commande' : 10200,
    'liste_articles' : [
      {
        'nom' : 'articleA',
        'quantite' : 5
      },
      {
        'nom' : 'articleB',
        'quantite' : 2
      }
    ]
  };


  res.send(dummy_dict);

});


const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log('ResponsesToFile App is listening now! Send them requests my way!');
  // console.log(`Data is being stored at location: ${path.join(process.cwd(), folderPath)}`);
});