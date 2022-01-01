import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorLogin = {
    alert: '',
    flag: false,
  };
  userData = {
    user: '',
    pass: ''
  }
  constructor(
   public router: Router
  ) {
   }

  ngOnInit(): void {
  }
  login(){
  if(this.userData.user == 'admin' && this.userData.pass == 'admin'){
    localStorage.setItem('user', JSON.stringify(this.userData));
    this.router.navigate(['/home'])
  } else if(!this.userData.user || !this.userData.pass) {
    this.errorLogin.alert = 'Llene ambos campos';
    this.errorLogin.flag = true;
    setTimeout(() => {
      this.errorLogin.flag = false;
    }, 2000);
  } else {
    this.errorLogin.alert = 'Datos incorrectos, verifica tu usuario o contraseña';
    this.errorLogin.flag = true;
    setTimeout(() => {
      this.errorLogin.flag = false;
    }, 2000);
  }
  }

}
