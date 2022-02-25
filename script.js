const express = require('express'),
  app = express(),
  fs = require('fs'),
  shell = require('shelljs');

app.get('/', (req, res) => res.send('Bienvenue sur Express dummy API'));

app.get('/detail_commande/:id', (req, res) => {
  console.log("commande "+req.params.id);
  //update cors header
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // Génération du dictionnaire dummy
  var dummy_dict = {
    'id_commande' : 1,
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

  //if the id_commande is not 1, send a 404 message
  if(req.params.id != 1){
    console.log("404 error, no entry found");
    res.send({'error': "404 error"});
  }else{
    res.send(dummy_dict);
  }

});


const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log('ResponsesToFile App is listening now! Send them requests my way!');
  // console.log(`Data is being stored at location: ${path.join(process.cwd(), folderPath)}`);
});