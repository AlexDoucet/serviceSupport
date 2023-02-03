import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';

@Component({
  selector: 'app-cocktail2',
  templateUrl: './cocktail2.component.html',
  styleUrls: ['./cocktail2.component.css']
})
export class Cocktail2Component implements OnInit {

  cocktails: any

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit() {
    this.getCocktailsFromService()// au démarrage de la page la fonction s'éxécute pour récupérer la variable cocktail du service
    console.log(this.cocktails);
  }

  getCocktailsFromService() {// fonction pour assigner la variable cocktails du component à la valeur de la variable cocktails du service
    this.cocktails = this.cocktailsService.getCocktails();
  }

}
