import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient ) { }

  ngOnInit() {

  }
  login(){
    // this.http.get('https://github.com/login/oauth/authorize').subscribe(data =>{
    //   console.log(data);
    // })

    
  }

}
