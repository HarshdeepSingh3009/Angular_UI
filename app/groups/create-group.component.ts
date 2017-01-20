import {Component, Inject} from "@angular/core";
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector:'mw-create-group',
    templateUrl:'app/groups/create-group.component.html',
    styleUrls:['app/login/login-form.component.css','app/groups/create-group.component.css']
})

export class CreateGroupComponent{
    form;
    constructor( private formBuilder: FormBuilder){

    }
    ngOnInit(){
        this.form = this.formBuilder.group({
            groupname: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
            university: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            department: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            term: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])), 
            course: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),  
            createdby: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
             maxstrength: this.formBuilder.control(100, Validators.compose([
                Validators.required
                ]))
        }); 
    }
     onSubmit(createForm)
    {
        console.log(createForm);
    }

    
}