import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getSelectedTrooper } from '../store/app.reducer';
import { isTrooperSelected } from '../store/app.reducer';
import { ClearSelection } from '../store/ui/ui.actions';
import { Trooper } from '../store/troopers/trooper.model';
import { Observable } from 'rxjs';

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
    this.store.dispatch(new ClearSelection);
  }

}
