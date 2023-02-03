import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
quotes : any;
  constructor() { }

  getData(){
    // return une donée (propriété) dispo dans le service
  }

  setData(){
    // modifie une donnée (propriété) dispo dans le service
  }

  setQuotes(quotes:any){
    console.log('quotes', quotes);
    this.quotes = quotes;
    // utiliser pour changer la valeur de quotes
  }

  getQuotes(){
    return this.quotes;
    // utiliser pour avoir la valeur de quotes
  }
}
