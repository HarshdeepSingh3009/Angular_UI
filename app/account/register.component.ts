import {Component, Inject} from "@angular/core";
import { Validators, FormBuilder} from "@angular/forms";

@Component({
    selector:'mw-register',
    templateUrl:'app/account/register.component.html',
    styleUrls:['app/login/login-form.component.css']
})

export class RegisterComponent{
    form;
    iserror = true;
    
    constructor(private formBuilder: FormBuilder){

    }
    ngOnInit(){
         this.form = this.formBuilder.group({
            username: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
        password: this.formBuilder.control('',Validators.compose([
             Validators.required
        ])),
        confirmpassword: this.formBuilder.control('', Validators.compose([
             Validators.required
        ]))
        
        });
    }

    onClick(registerform)
    {
        console.log(registerform);
    }
    
    onKey(passvalue, confirmval)
    {
        console.log([passvalue,confirmval]);
        if(confirmval !== passvalue)
        {
            this.iserror = true;
        }
        else
        {
            this.iserror = false;
        }
    }
}