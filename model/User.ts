import {RoleEnum} from "../util/RoleEnum";
import {name} from "cookie-parser";

export class User {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: RoleEnum;


    constructor(id: number, name: string, email: string, password: string, role: RoleEnum) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

}