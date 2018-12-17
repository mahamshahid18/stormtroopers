import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { UIActionTypes, SelectTrooper } from '../store/ui/ui.actions';
// import { UIState } from '../store/ui/ui.model';

@Component({
  selector: 'app-troopers',
  templateUrl: './troopers.component.html',
  styleUrls: ['./troopers.component.scss']
})
export class TroopersComponent implements OnInit {

  troopers = [{
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

  selectTrooper(trooper) {
    // console.log(trooper);
    // this.store.dispatch({ 
    //   type: UIActionTypes.SelectTrooper,
    //   payload: {
    //     isTrooperSelected: true,
    //     isTrooperInEditState: false
    //   }
    // });
    this.store.dispatch(new SelectTrooper());
  }

}
