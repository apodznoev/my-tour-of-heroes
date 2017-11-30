import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {RandomChangePipe} from './random-change.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RandomChangePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
