import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
quotes: any = [];

  constructor(private dataService: DataService){}
// service toujours à déclarer dans le constructor
ngOnInit(): void {
this.getQuotesFromService();
// au démarrage de la page la valeur de quotes est attribué par la fonction
}

getQuotesFromService(){

console.log('this.dataService.getQuotes()', this.dataService.getQuotes());
// premier paramètre est un marqueur pour reconnaitre le console.log effectué
this.quotes = this.dataService.getQuotes();
// utilisation de get pour recupérer la valeur de quotes dans le service
}



}
