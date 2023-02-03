import { Component } from '@angular/core';
import { CocktailsService } from '../cocktails.service';

@Component({
  selector: 'app-cocktail1',
  templateUrl: './cocktail1.component.html',
  styleUrls: ['./cocktail1.component.css']
})
export class Cocktail1Component {

  title: string = 'Liste des cocktails :'

  constructor(private cocktailsService: CocktailsService) { }

getCocktails(){// création de la fonction getCocktails

  this.cocktailsService.setCocktails()// appel de la fonction setCocktails du service

}

}
