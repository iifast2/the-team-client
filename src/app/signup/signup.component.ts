import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../service/user/user.service';
import {newUser} from '../model/user+role/newUser';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
   /* focus;
    focus1;
    focus2;*/
    userRole: string;
     username = new FormControl('');
      email = new FormControl('');
       password =   new FormControl('');


    constructor(private formBuilder: FormBuilder, private userService: UserService) {

    }

    ngOnInit() {
     /*   */
    }

    submit() {
        console.log('el username: ' + this.username.value + 'el mail: ' + this.email.value);
      const createdUser = {
            username: this.username.value ,
            password: this.password.value ,
            email: this.email.value ,
            roles: [this.userRole]
        };
      this.userService.add(createdUser).subscribe();
    }


}
