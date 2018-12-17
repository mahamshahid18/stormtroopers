import { 
    UIActionTypes
} from './ui.actions';

import { UIState } from './ui.model';


const initialState: UIState = {
    isTrooperSelected: false,
    isTrooperInEditState: false
};

export function uiReducer(state: UIState = initialState, action): UIState { 
    switch (action.type) {
        case UIActionTypes.SelectTrooper:
            return {
                isTrooperSelected: true,
                isTrooperInEditState: state.isTrooperInEditState
            };
        case UIActionTypes.ClearSelection:
            return {
                isTrooperSelected: false,
                isTrooperInEditState: state.isTrooperInEditState
            }; 
        case UIActionTypes.EditTrooperDetails: 
            return {
                isTrooperSelected: state.isTrooperSelected,
                isTrooperInEditState: state.isTrooperInEditState
            };
        default:
            return state;
    }
}

export const getIsTrooperSelected = (state: UIState) => state.isTrooperSelected;
export const getIsTrooperInEditState = (state: UIState) => state.isTrooperInEditState;