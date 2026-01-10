import { Controller, Get } from "@nestjs/common";
import { AuthServices } from "../service/auth.service";

@Controller()
export class AuthController {

    constructor(private readonly service:AuthServices){}
    @Get("user")
    getUser() {
        return this.service.login()
        // change this auth lamar
    }
}