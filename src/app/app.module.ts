import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SpecificCharacterComponent } from './specific-character/specific-character.component';
import {CarouselModule} from "ngx-bootstrap";
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from "@angular/forms";
import { CharacterByNameComponent } from './character-by-name/character-by-name.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SpecificCharacterComponent,
    AllCharactersComponent,
    CharacterByNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    CarouselModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
