import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, getSelectedTrooper, isTrooperSelected } from '../store/app.reducer';

import { ClearSelection } from '../store/ui/ui.actions';

import { Trooper } from '../store/troopers/trooper.model';
import { ClearTrooper } from '../store/troopers/troopers.actions';;

@Component({
  selector: 'app-trooper',
  templateUrl: './trooper.component.html',
  styleUrls: ['./trooper.component.scss']
})
export class TrooperComponent implements OnInit {

  isTrooperSelected$: Observable<boolean>;
  trooper$: Observable<Trooper>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isTrooperSelected$ = this.store.pipe(select(isTrooperSelected));
    this.trooper$ = this.store.pipe(select(getSelectedTrooper));
  }

  clear() {
    // trooper
    this.store.dispatch(new ClearTrooper());
  
    // ui
    this.store.dispatch(new ClearSelection());
  }

}
