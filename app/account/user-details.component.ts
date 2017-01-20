import {Component, Inject} from "@angular/core";
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector:'mw-user-details',
    templateUrl:'app/account/user-details.component.html',
    styleUrls:['app/login/login-form.component.css','app/account/user-details.component.css']
})

export class UserDetailsComponent{
    form;
    userid  = 0;
    userrole ;

    constructor( private formBuilder: FormBuilder){

    }
    ngOnInit(){
        this.form = this.formBuilder.group({
            firstname: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
            lastname: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
            university: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            department: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            email: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            role: this.formBuilder.control('', Validators.compose([
                Validators.required
                ]))
        }); 
    }
     onSubmit(userdetailsForm)
    {
        console.log(userdetailsForm);
        this.userid += 1;
        this.userrole = userdetailsForm.role;
        console.log([this.userid,this.userrole]);
    }

    
}