import { Action } from '@ngrx/store';
import { Trooper } from './trooper.model';

export const trooperActionTypes = {
    AddTrooper: '[Trooper] Add Trooper',
    UpdateTrooper: '[Trooper] Edit Trooper',
    SelectTrooper: '[Trooper] Select Trooper',
    ClearTrooper: '[Trooper] Clear Trooper',
};

export class AddTrooper implements Action {
    type = trooperActionTypes.AddTrooper;

    constructor(public payload: Trooper) {}
}

export class EditTrooper implements Action {
    type = trooperActionTypes.UpdateTrooper;

    constructor(public payload: Trooper) {}
}

export class SelectTrooper implements Action {
    type = trooperActionTypes.SelectTrooper;

    constructor(public payload: Trooper) { }
}

export class ClearTrooper implements Action {
    type = trooperActionTypes.ClearTrooper;
}

export type TrooperAction = AddTrooper
    | EditTrooper
    | SelectTrooper
    | ClearTrooper;