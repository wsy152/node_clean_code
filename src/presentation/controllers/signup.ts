import { MissingParamError } from '../error/missing-param-error'
import { HttpResponse, httpRequest} from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
export class SignUpController{
    
    handle(httpRequest: httpRequest): HttpResponse {
        const requiredFields = ['name', 'email','password']  
        for (const field of requiredFields){
            if(!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }

        }   
    }
}