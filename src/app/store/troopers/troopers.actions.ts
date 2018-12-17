import { Action } from '@ngrx/store';
import { Trooper } from './trooper.model';

export const trooperActions = {
    ADD_TROOPER: '[Trooper] Add Trooper',
    UPDATE_TROOPER: '[Trooper] Edit Trooper'
};

export class AddTrooper implements Action {
    type = trooperActions.ADD_TROOPER;

    constructor(public trooper: Trooper) {}
}

export class EditTrooper implements Action {
    type = trooperActions.UPDATE_TROOPER;

    constructor(public trooper: Trooper) {}
}