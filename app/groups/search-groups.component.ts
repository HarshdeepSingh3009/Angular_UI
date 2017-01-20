import {Component, Inject} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import  { GroupService } from "../group.service";
import { Router } from "@angular/router";
import { ActivatedRoute} from "@angular/router";

@Component({
    selector:'mw-search-groups',
    templateUrl:'app/groups/search-groups.component.html',
    styleUrls:['app/login/login-form.component.css','app/groups/search-groups.component.css']
})

export class SearchGroupComponent{
    displaygrid =false;
    form;
    groups:any[];
     paramsSubscription;
    constructor( private formBuilder: FormBuilder,
     private groupService : GroupService,
      private router : Router,private activatedRoute :ActivatedRoute
      )
    {       
    }

    ngOnInit(){
        this.form = this.formBuilder.group({
            groupname: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            university: this.formBuilder.control('', Validators.compose([
                Validators.required])),
            department: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            term: this.formBuilder.control('', Validators.compose([
                Validators.required
                ])),
            course: this.formBuilder.control('', Validators.compose([
                Validators.required
            ]))
            });
}

onSubmit(searchgroupform){
    console.log(searchgroupform);
    this.groups = [];
    this.groupService.get("search",searchgroupform).subscribe(
            data =>{
               this.groups = data;   
               console.log(this.groups);
            });
    if(this.groups.length > 0)
    {
    this.displaygrid = true;
    }
}

}
