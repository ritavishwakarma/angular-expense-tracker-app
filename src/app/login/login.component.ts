import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerUser(e)  {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    console.log(username, password);
    if(username= e.target.elements[0].value && password==e.target.elements[1].value){
      this.router.navigate(['main-page']);
    }
}
}
