import { Component, Inject} from "@angular/core";


@Component({
    selector:"mw-home",
    templateUrl:"app/home.component.html",
    styleUrls:['app/login/login-form.component.css','app/home.component.css','Style/bootstrap.css']
})

export class HomeComponent{
    post;
    posts=[];
    groups=[];
    showcontent = false;
    havegroups = false;
    selectedgroup = 0;

    constructor()
    {
        this.groups=[
            {
                groupid:1,
                groupname:"pdp 123",
                posts:[{
            id:1,
            title:"Welcome !!",
            content:"hi there welcome to the new class",
            posteddate:new Date().toLocaleString(),
            postedby:"harsh"
        },
        {
            id:2,
            title:"hello !!",
            content:"hello",
            posteddate:new Date().toLocaleString(),
            postedby:"harshpret"
        },
        {
            id:3,
            title:"lets get started !!",
            content:"first post ",
            posteddate:new Date().toLocaleString(),
            postedby:"harshdeep"
        }]
            },
            {
                groupid:2,
                groupname:"algo 123",
                posts:[{
            id:1,
            title:"Welcome !!",
            content:"hi there welcome to the new class",
            posteddate:new Date().toLocaleString(),
            postedby:"harsh"
        },
        {
            id:2,
            title:"hello !!",
            content:"hello",
            posteddate:new Date().toLocaleString(),
            postedby:"harshpret"
        },
        {
            id:3,
            title:"lets get started !!",
            content:"first post ",
            posteddate:new Date().toLocaleString(),
            postedby:"harshdeep"
        }]
            }];
            this.initializecontent();
            if(this.groups.length > 0)
            {
                this.havegroups = true;
            }
    }

    onClick(selectedpost)
    {
        this.post = selectedpost;
        this.showcontent = true;
    }

    initializecontent(){
        var tempgroups = this.groups;
        this.groups = tempgroups.sort(function(a, b) {return a.id - b.id;});
        this.posts = this.groups[0].posts;
    }
    onChange(val)
    {
        for (var i = 0 ; i < this.groups.length;i++)
        {
            var group = this.groups[i];
            if(group.id === val)
            {
                this.selectedgroup = this.groups[i].id;
                this.posts = this.groups[i].posts;
            }
        }


    }
}