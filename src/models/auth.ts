interface IError {
    code: string,
    message: string,
}

export interface IAuth {
    loading: boolean,
    error: IError,
    signedIn: boolean,
}

export interface IAuthAction {
    type: string,
    payload: {
        email: string,
        password: string,
    }
}
export interface IAuthErrorAction {
    type: string,
    payload: IError,
}