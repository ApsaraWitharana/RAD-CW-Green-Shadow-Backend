import {GenderEnum} from "../util/GenderEnum";
import {RoleEnum} from "../util/RoleEnum";


export class Staff {
    staffId: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender:GenderEnum;
    joinedDate: string;
    dob: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    contactNumber: string;
    email: string;
    role: RoleEnum;


    constructor(staffId: string, firstName: string, lastName: string, designation: string, gender: GenderEnum, joinedDate: string, dob: string, addressLine1: string, addressLine2: string, addressLine3: string, addressLine4: string, addressLine5: string, contactNumber: string, email: string, role: RoleEnum) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.dob = dob;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressLine3 = addressLine3;
        this.addressLine4 = addressLine4;
        this.addressLine5 = addressLine5;
        this.contactNumber = contactNumber;
        this.email = email;
        this.role = role;
    }
}