import { Action } from '@ngrx/store';

export const uiActions = {
    IS_TROOPER_SELECTED: '[UI] Is Trooper Selected',
    SELECTED_TROOPER_ID: '[UI] Selected Trooper Id',
    TROOPER_IN_EDIT_STATE: '[UI] Trooper in Edit State'
};

export class IsTrooperSelected implements Action {
    readonly type = uiActions.IS_TROOPER_SELECTED;
}

export class SelectedTrooperId implements Action {
    readonly type = uiActions.SELECTED_TROOPER_ID;

    constructor(public trooperId: number) {}
}

export class TrooperInEditState implements Action {
    readonly type = uiActions.TROOPER_IN_EDIT_STATE;
}

export type UIActions = IsTrooperSelected | SelectedTrooperId | TrooperInEditState;

