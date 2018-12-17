// merge all the reducers here

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { 
    uiReducer,
    getIsTrooperSelected,
    getIsTrooperInEditState
} from './ui/ui.reducer';
import { UIState } from './ui/ui.model';

export interface AppState {
    ui: UIState
}

export const reducers: ActionReducerMap<AppState> = {
    ui: uiReducer
};

export const getUIState = createFeatureSelector<AppState, UIState>('ui');
export const isTrooperSelected = createSelector(getUIState, getIsTrooperSelected);
export const isTrooperInEditState = createSelector(getUIState, getIsTrooperInEditState);

