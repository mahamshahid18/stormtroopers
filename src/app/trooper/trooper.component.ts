import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { isTrooperSelected } from '../store/app.reducer';
import { ClearSelection } from '../store/ui/ui.actions';

@Component({
  selector: 'app-trooper',
  templateUrl: './trooper.component.html',
  styleUrls: ['./trooper.component.scss']
})
export class TrooperComponent implements OnInit {

  trooperSelected$;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.trooperSelected$ = this.store.pipe(select(isTrooperSelected));
  }

  clear() {
    this.store.dispatch(new ClearSelection);
  }

}
