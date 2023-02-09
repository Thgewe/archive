export interface IError {
    code: string,
    message: string,
}

export interface IErrorAction {
    type: string,
    payload: IError,
}