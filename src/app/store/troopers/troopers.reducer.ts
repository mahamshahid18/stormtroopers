import { Trooper } from './trooper.model';
import { trooperActionTypes } from './troopers.actions';

export interface TrooperState {
    allTroopers: Trooper[],
    selectedTrooper: Trooper
}

const initialState: TrooperState = {
    allTroopers: [
        {
            name: 'FN2187',
            unit: 'Imperial Infantry',
            rating: 2
        }
    ],
    selectedTrooper: null
};

export function trooperReducer(state: TrooperState = initialState, action): TrooperState {
    switch (action.type) {
        case trooperActionTypes.AddTrooper:
            return {
                ...state,
                allTroopers: state.allTroopers.concat(action.payload)
            }
        case trooperActionTypes.UpdateTrooper:
            return state;
        case trooperActionTypes.SelectTrooper:
            return {
                ...state,
                selectedTrooper: action.payload
            }
        case trooperActionTypes.ClearTrooper:
            return {
                ...state,
                selectedTrooper: null
            }
        default:
            return state;
    }
}
