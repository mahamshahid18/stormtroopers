import { Action } from '@ngrx/store';
import { Trooper } from './trooper.model';

export const trooperActionTypes = {
    AddTrooper: '[Trooper] Add Trooper',
    UpdateTrooper: '[Trooper] Edit Trooper',
    ViewAllTroopers: '[Trooper] View Troopers',
    SelectTrooper: '[Trooper] Select Trooper'
};

export class AddTrooper implements Action {
    type = trooperActionTypes.AddTrooper;

    constructor(public trooper: Trooper) {}
}

export class EditTrooper implements Action {
    type = trooperActionTypes.UpdateTrooper;

    constructor(public trooper: Trooper) {}
}

export class ViewAllTroopers implements Action {
    type = trooperActionTypes.ViewAllTroopers;
}

export class SelectTrooper implements Action {
    type = trooperActionTypes.SelectTrooper;

    constructor(public payload: Trooper) { }
}

export type TrooperAction = ViewAllTroopers | AddTrooper | EditTrooper;