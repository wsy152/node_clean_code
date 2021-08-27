import { MissingParamError } from '../error/missing-param-error'
import { HttpResponse, httpRequest} from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
export class SignUpController{
    
    handle(httpRequest: httpRequest): HttpResponse {
        if (!httpRequest.body.name) {
            return badRequest(new MissingParamError('name'))
        }

        if (!httpRequest.body.email) {
            return badRequest(new MissingParamError('email'))
        }       
    }
}