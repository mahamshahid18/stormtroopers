import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState, getAllTroopers } from '../store/app.reducer';

import { SelectTrooperUI } from '../store/ui/ui.actions';

import { SelectTrooper, AddTrooper } from '../store/troopers/troopers.actions';
import { Trooper } from '../store/troopers/trooper.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-troopers',
  templateUrl: './troopers.component.html',
  styleUrls: ['./troopers.component.scss']
})
export class TroopersComponent implements OnInit {
  newTrooper: Trooper = {
    name: null,
    rating: null,
    unit: null,
  };
  troopers$: Observable<Trooper[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.troopers$ = this.store.pipe(select(getAllTroopers));
  }

  selectTrooper(trooper: Trooper) {
    this.store.dispatch(new SelectTrooperUI())
    this.store.dispatch(new SelectTrooper(trooper));
  }

  addTrooper(trooper) {
    this.store.dispatch(new AddTrooper({...this.newTrooper}));
    this.clearForm();
  }

  clearForm() {
    this.newTrooper.name = null;
    this.newTrooper.unit = null;
    this.newTrooper.rating = null;
  }

}
