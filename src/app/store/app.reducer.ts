// merge all the reducers here

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { 
    uiReducer,
    getIsTrooperSelected,
    getIsTrooperInEditState
} from './ui/ui.reducer';
import {
    trooperReducer,
    TrooperState
} from './troopers/troopers.reducer';
import { UIState } from './ui/ui.model';

export interface AppState {
    ui: UIState,
    troopers: TrooperState
}

export const reducers: ActionReducerMap<AppState> = {
    ui: uiReducer,
    troopers: trooperReducer
};

// helper selectors for ui slice
export const getUIState = createFeatureSelector<AppState, UIState>('ui');
export const isTrooperSelected = createSelector(getUIState, getIsTrooperSelected);
export const isTrooperInEditState = createSelector(getUIState, getIsTrooperInEditState);

// helper selectors for troopers slice
export const getTroopersState = createFeatureSelector<AppState, TrooperState>('troopers');
export const getAllTroopers = createSelector(getTroopersState,
    (state: TrooperState) => state.allTroopers
);
export const getSelectedTrooper = createSelector(getTroopersState, 
    (state: TrooperState) => state.selectedTrooper
);