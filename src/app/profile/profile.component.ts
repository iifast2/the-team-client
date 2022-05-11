import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    users: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
      const resp = this.http.get('http://localhost:8080/users/1');
      resp.subscribe((data) => this.users = data);



    }

}
