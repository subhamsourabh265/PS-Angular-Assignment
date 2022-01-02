export interface State {
    isPeeled: boolean;
    slicesRemaining: number;
    color: string;
}

export const initialState: State = {
    isPeeled: false,
    slicesRemaining: 0,
    color: "brown"
};