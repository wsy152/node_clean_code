export class MissingParamError extends Error {
    constructor (paraName: String) {
        super(`Missing param: ${paraName}`)
        this.name = 'MissingParamError'
    }
}
