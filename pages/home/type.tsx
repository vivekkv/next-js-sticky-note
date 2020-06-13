type ActionType = { type: 'ON_LOGIN', user: IUser } | { type: 'ON_LOGIN_SUCCESS' } | { type: 'ON_LOGIN_FAILED' } | { type: 'SET_USERS', users: IUser[] };

export type State = {
    users?: IUser[],
    loginSuccess?: boolean,
    message?: string
}

export interface IUser {
    username?: string;
    Password?: string;
}

export default ActionType;
