type ActionType = { type: 'SET_POSTS', posts: IPosts[] } | { type: 'ON_LOG_OFF' } ;

export interface State {
    posts: IPosts[]
}

export interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string
}

export default ActionType;
