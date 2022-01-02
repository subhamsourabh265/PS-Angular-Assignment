import { ActionReducerMap } from "@ngrx/store";
import * as onionState from 'src/app/modules/onion-app/state/onion.state';
import { onionReducer } from "./modules/onion-app/state";

export interface AppState {
    onion: onionState.State
}

export const initialState: AppState = {
    onion: onionState.initialState
}

export const reducers: ActionReducerMap<AppState> = {
    onion: onionReducer as any
}

export const getMyOnion = (s: AppState) => s.onion;