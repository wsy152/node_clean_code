import { MissingParamError } from '../error/missing-param-error'
import { HttpResponse, httpRequest} from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
    
    handle(httpRequest: httpRequest): HttpResponse {
        const requiredFields = ['name', 'email', 'password','passwordConfirmation']
        for (const field of requiredFields){
            if(!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }

        }   
    }
}