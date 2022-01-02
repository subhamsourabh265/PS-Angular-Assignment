import { Action } from '@ngrx/store';

export const GET_NEW_ONION = 'Get New Onion';

export class GetNewOnion {
    readonly type: string = GET_NEW_ONION;

    constructor(public payload: any){
        console.log('Action:' + GET_NEW_ONION);
    }
}

export type OnionAction = GetNewOnion;