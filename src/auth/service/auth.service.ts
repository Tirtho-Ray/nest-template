import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthServices {
    constructor(private readonly prisma:PrismaService){}

    async login (){

        const user = await this.prisma.user.findFirst()
    }
}