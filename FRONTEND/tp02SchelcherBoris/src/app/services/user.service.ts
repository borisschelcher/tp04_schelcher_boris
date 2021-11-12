import { Injectable } from "@angular/core";
import { User } from "../models/User.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
user : User = new User(
    
        'Blonde',
        'Jean',
        '20 rue du croissant',
        90000,
        'Paris',
        '0656859552',
        'test@gmail.com',
        'Monsieur',
        '123456',
        '123456',
        'userlogin',
        'FRANCE'
    
);
inSignin(User : User){
this.user = User;

};

}