import { Trooper } from './trooper.model';
import { trooperActionTypes } from './troopers.actions';

export interface TrooperState {
    allTroopers: Trooper[],
    selectedTrooper: Trooper
}

const initialState: TrooperState = {
    allTroopers: [],
    selectedTrooper: null
};

export function trooperReducer(state: TrooperState = initialState, action): TrooperState {
    switch (action.type) {
        case trooperActionTypes.AddTrooper:
            return state;
        case trooperActionTypes.UpdateTrooper:
            return state;
        case trooperActionTypes.ViewAllTroopers:
            return state;
        case trooperActionTypes.SelectTrooper:
            return {
                ...state,
                selectedTrooper: action.payload
            }
        default:
            return state;
    }
}
