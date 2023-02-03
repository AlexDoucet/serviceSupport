import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // import du service

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
// OnInit est implementé

title : string = 'Liste des cocktails'

constructor(private dataService: DataService)
{}// service déclaré dans le constructeur
  ngOnInit(): void {
    this.getSimpsonsQuotes();
    // au démarrage de la page éxecute l'appel API
}




// async sert a mettre les await
async getSimpsonsQuotes(){ // appel api et utilisation de set pour changer valeur de quotes dans service
  return fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
  .then(response => response.json())
  .then(quotes => {this.dataService.setQuotes(quotes)});
  // utilisation de setQuotes pour changer valeur de quotes dans le service



  // const res1 = await fetch ("https://thesimpsonsquoteapi.glitch.me/quotes");
  // const quotes1 = await this.res1.json;
  // const res2 = await fetch ("https://thesimpsonsquoteapi.glitch.me/quotes");
  // const quotes2 = await this.res1.json;

  // return fetch ("https://thesimpsonsquoteapi.glitch.me/quotes")
  // .then((response) => response.json())
  // .then((quotes) => {
  //   console.log("quotes", quotes);
  //   return fetch("https://thesimpsonsquoteapi.glitch.me/quotes")})
  //   .then((response) => response.json())
  //   .then((quotes) => {console.log(quotes)});
  // }

  // const urls = ["https://thesimpsonsquoteapi.glitch.me/quotes", "https://thesimpsonsquoteapi.glitch.me/quotes"];
  //   for await (const url of urls) {
  //     const res = await fetch(url);
  //     const quotes = await res.json();
  //     console.log("quotes", quotes);
  //   }

  // cette derniere methode est la meme chose que la premier mais avec une boucle


};
// sur la page 1 je veux un titre et un bouton qui nous fais l'appel API
// sur la page 2, je dois afficher les noms des cocktails
//
//
// liste cocktails :
// 17222
// 13501
// 17225
// 14610
//
//https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid={id}    lien pour recherche par ID
//
//
//

}


