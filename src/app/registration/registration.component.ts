import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  registerUser(e)  {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var firstname = e.target.elements[2].value;
    var lastname = e.target.elements[3].value;
    
    console.log(username, password,firstname,lastname);
      this.router.navigate(['login']);
  
}

}
