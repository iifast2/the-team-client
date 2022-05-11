import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

   const resp = this.http.get('http://localhost:8080/users');
   resp.subscribe((data) => this.users = data);


   /*

   let resp = this.http.get('http://localhost:8080/users');
   resp.subscribe((data) => console.log(data));

    */

  }

}


