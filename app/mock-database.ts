import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
    constructor() {
    }

    createConnection(request: Request) {
        var response = new Observable((responseObserver: Observer<Response>) => {
            var responseData;
            var responseOptions;
            switch (request.method) {
                case RequestMethod.Get:
                console.log(request.url)
               
                     if (request.url.indexOf('search?') >= 0) {
                        var searchvalue;
                        var svalue = {} ;
                        if (request.url.indexOf('?') >= 0) {
                            searchvalue = request.url.split('?')[1];
                            svalue = this.QueryString(searchvalue);
                             console.log(searchvalue)
                            if (searchvalue === 'undefined') searchvalue = '';
                        }
                       
                        searchvalue = svalue;
                        var groupslist;
                        if (searchvalue) {
                            groupslist = this.groups.filter(groupItem => groupItem.groupname === searchvalue.groupname && groupItem.university === searchvalue.university &&
                                    groupItem.course === searchvalue.course && groupItem.department === searchvalue.department && groupItem.term === searchvalue.term);
                        } else {
                            groupslist = [];
                        }
                        responseOptions = new ResponseOptions({
                            body: { groups: JSON.parse(JSON.stringify(groupslist)),
                            headers:"showgrid"},
                            status: 200
                        });
                    }  /*else {
                        var id = parseInt(request.url.split('/')[1]);
                        mediaItems = this._mediaItems.filter(mediaItem => mediaItem.id === id);
                        responseOptions = new ResponseOptions({
                            body: JSON.parse(JSON.stringify(mediaItems[0])),
                            status: 200
                        });
                    }*/
                    break;
              /*  case RequestMethod.Post:
                    var mediaItem = JSON.parse(request.text().toString());
                    mediaItem.id = this._getNewId();
                    this._mediaItems.push(mediaItem);
                    responseOptions = new ResponseOptions({ status: 201 });
                    break;*/
               /* case RequestMethod.Delete:
                    var id = parseInt(request.url.split('/')[1]);
                    this._deleteMediaItem(id);
                    responseOptions = new ResponseOptions({ status: 200 });*/
            }

            var responseObject = new Response(responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return () => {};
        });
        return { response };
    }

  QueryString (query) {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}

  /*  _deleteMediaItem(id) {
        var mediaItem = this._mediaItems.find(mediaItem => mediaItem.id === id);
        var index = this._mediaItems.indexOf(mediaItem);
        if (index >= 0) {
            this._mediaItems.splice(index, 1);
        }
    }

    _getNewId() {
        if (this._mediaItems.length > 0) {
            return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
        }
    }*/

    groups=[
            {
                groupid:1,
                groupname:"pdp 123",
                university:"NEU",
                department:"CS",
                course:"PDP",
                term:"S-2017",
                maxstrength:100,
                seatsleft:50,
                 createdby:'guri',
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
                university:"HD",
                department:"IS",
                course:"ALGO",
                term:"SP-2017",
                maxstrength:80,
                seatsleft:35,
                createdby:'harsh',
                posts:[{
            id:1,
            title:"Welcome here!!",
            content:"hi there welcome to the new class",
            posteddate:new Date().toLocaleString(),
            postedby:"harsh"
        },
        {
            id:2,
            title:"hello there !!",
            content:"hello",
            posteddate:new Date().toLocaleString(),
            postedby:"harshpreet"
        },
        {
            id:3,
            title:"lets get started yo yo!!",
            content:"first post ",
            posteddate:new Date().toLocaleString(),
            postedby:"harshdeep"
        }]
            }];
}