import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule  } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TroopersComponent } from './troopers/troopers.component';
import { TrooperComponent } from './trooper/trooper.component';

import { reducers } from './store/app.reducer';

// store needs to be included
// main reducer needs to be included

@NgModule({
  declarations: [
    AppComponent,
    TroopersComponent,
    TrooperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
