import { Action } from '@ngrx/store';
import { UIState } from './ui.model';

export const UIActionTypes = {
    SelectTrooper: '[UI] Select Trooper',
    ClearSelection: '[UI] Clear Selected Trooper',
    EditTrooperDetails: '[UI] Edit Trooper Details'
};

export class SelectTrooper implements Action {
    readonly type = UIActionTypes.SelectTrooper;
}

export class ClearSelection implements Action {
    readonly type = UIActionTypes.ClearSelection;
}

export class EditTrooperDetails implements Action {
    readonly type = UIActionTypes.EditTrooperDetails;
}

export type UIActions = SelectTrooper | ClearSelection | EditTrooperDetails;
