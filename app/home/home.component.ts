import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authStatus: boolean = false;
  authTimeouts = [];
  displayResults: boolean = false;
  apiResults:any = null;
  instance = this;
  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

    //When the form is submitted, call a promise from authService, if it is successfull,
  // init variables and go to vizjs-view
  onSubmit(form: NgForm){
    const tempo_n_commande = form.value['n_n_commande'];
    console.log("num commande = "+tempo_n_commande);
    //query the rest api server to check if an error occured
    this.fetchAPIData(tempo_n_commande);

  }

  fetchAPIData(n_commande: any){
    var url = "http://localhost:8085/detail_commande/";
    console.log("url finale = \n"+url+n_commande);
    const promise = this.httpClient.get(url+n_commande).toPromise();
    promise.then((data)=>{
      //check if stringify data contains 404, if it's the case trigger
      // a 404 error + hide results + display a message (popup)
      if(JSON.stringify(data).includes("404")){
        console.log("404 error");
        this.displayResults = false;
        this.apiResults = null;
        $("#alert_modal_body").html("Aucun élément trouvé, veuillez réessayer avec un nouvel id");
        $("#alertModalLabel").html("Erreur 404");
        $('#alertModal').modal("show");
      }else{
        console.log("data = "+JSON.stringify(data));
        this.displayResults = true;
        //Use json data to get all names + all quantities in specifics folder
        //this.apiResults = [JSON.parse(JSON.stringify(data))["liste_articles"]];
        this.apiResults = JSON.parse(JSON.stringify(data));
        this.apiResults = this.apiResults['liste_articles'];
        console.log("Promise successful");
      }
    }).catch((error)=>{
      //log + hide + display a popup
      console.log("Promise rejected with " + JSON.stringify(error));
      this.displayResults = false;
      this.apiResults = null;
      $("#alert_modal_body").html("Erreur: "+JSON.parse(JSON.stringify(error))['error']['text']);
      $("#alertModalLabel").html("Erreur rencontrée durant la requête");
      $('#alertModal').modal('show');
    });
  }
}
