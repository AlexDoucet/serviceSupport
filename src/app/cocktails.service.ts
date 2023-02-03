import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CocktailsService {

  idCocktails = [17222, 13501, 17225, 14610] // array pour les numéros d'ID

  cocktails: any = []; // initiation de la variable cocktails en array pour pouvoir itérer dessus sur le HTML

  constructor() { }

  getCocktails() {// fonction pour récupérer la valeur des cocktails du service
    return this.cocktails;// return de la variable cocktails du service
  }

  async setCocktails() {// fonction async pour pouvoir utiliser await

    for await (const cocktail of this.idCocktails) {// boucle for await pour itérer les demandes

      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`); // variable pour les appels API avec ID dynamique stocké plus haut dans la variable idCocktails.

      const cocktails = await response.json(); // variable pour transformer la variable response en JSON

      this.cocktails.push(cocktails.drinks[0]) // on envoie la réponse en pushant dans notre tableau à l'extèrieur de la fonction
    }


  }

}
