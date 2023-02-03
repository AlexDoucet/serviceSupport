import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from 'src/app/page1/page1.component';
import { Page2Component } from 'src/app/page2/page2.component';
import { Cocktail2Component } from 'src/app/cocktail2/cocktail2.component';
import { Cocktail1Component } from 'src/app/cocktail1/cocktail1.component';

const routes: Routes = [

{path:"", component:Cocktail1Component},
{path:"page2", component:Cocktail2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
