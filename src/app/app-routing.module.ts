import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpecificCharacterComponent} from './specific-character/specific-character.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AllCharactersComponent} from './all-characters/all-characters.component';
import {CharacterByNameComponent} from './character-by-name/character-by-name.component';


const routes: Routes = [
  {path : '' , component: LandingPageComponent},
  {path: 'allCharacters' , component: AllCharactersComponent},
  {path: 'specificCharacter', component : SpecificCharacterComponent},
  {path: 'characterByName', component: CharacterByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
