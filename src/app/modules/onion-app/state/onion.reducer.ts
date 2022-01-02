import { GET_NEW_ONION } from "./onion.action";
import * as onionActions from "./onion.action";

export function onionReducer(state: any, action: onionActions.OnionAction) {
    switch(action.type) {
        case onionActions.GET_NEW_ONION:
            console.log('REDUCER: ' + GET_NEW_ONION);
            return {
                isPeeled: false,
                slicesRemaining: 1,
                color: 'brown'
            };

        default:
            return {
                ...state
            };
    }
}