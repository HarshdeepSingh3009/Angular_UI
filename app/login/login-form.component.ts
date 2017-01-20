import { Component, Inject } from "@angular/core";
import { Validators, FormBuilder} from "@angular/forms";

@Component({
    selector:'login',
    templateUrl:'app/login/login-form.component.html',
    styleUrls:['app/login/login-form.component.css']
})

export class LogInComponent{
    form;
    pword = "";

    constructor( private formBuilder: FormBuilder){

    }
    ngOnInit(){
        this.form = this.formBuilder.group({
        username: this.formBuilder.control('', Validators.compose([
            Validators.required,
            Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
        password: this.formBuilder.control('')
    
        });
    }
    onSubmit(loginForm)
    {
        console.log(loginForm);
       /* this.mediaItemService.add(mediaItem).subscribe(
            ()=>{
                this.router.navigate(['/', mediaItem.medium]);
            }
        );*/
    }
}