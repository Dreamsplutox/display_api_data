import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authStatus: boolean = false;
  authTimeouts = [];

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
    console.log("my promise : \n"+promise);
    promise.then((data)=>{
      console.log(JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
}
