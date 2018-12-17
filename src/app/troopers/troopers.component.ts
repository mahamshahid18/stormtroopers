import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

import { UIActionTypes, SelectTrooperUI } from '../store/ui/ui.actions';

import { SelectTrooper } from '../store/troopers/troopers.actions';
import { Trooper } from '../store/troopers/trooper.model';

@Component({
  selector: 'app-troopers',
  templateUrl: './troopers.component.html',
  styleUrls: ['./troopers.component.scss']
})
export class TroopersComponent implements OnInit {

  troopers: Trooper[] = [{
      name: 'FN2187',
      unit: 'xyz',
      rating: 2
    }, {
      name: 'FN2147',
      unit: 'xyz',
      rating: 4
    }, {
      name: 'PH227',
      unit: 'elite',
      rating: 5
    }
  ];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  selectTrooper(trooper: Trooper) {
    this.store.dispatch(new SelectTrooperUI())
    this.store.dispatch(new SelectTrooper(trooper));
  }

}
