import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TroopersComponent } from './troopers/troopers.component';
import { TrooperComponent } from './trooper/trooper.component';

@NgModule({
  declarations: [
    AppComponent,
    TroopersComponent,
    TrooperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
