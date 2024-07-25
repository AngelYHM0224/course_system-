import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

declare function _clickDoc():any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  //auth-login
  email:any = null;
  password:any = null;
  constructor(
    public authServices: AuthService,
    public router: Router,
  ){}

  ngOnInit(): void{
    setTimeout(() => {
      _clickDoc();
    }, 50);

    if(this.authServices.user){
      this.router.navigateByUrl("/");
      return;
    }
  }

  login(){
    if(!this.email || !this.password){
      alert("Necesitas ingresar todos los campos");
      return;
    }
    this.authServices.login(this.email, this.password).subscribe((resp:any) => {
      console.log(resp);
      if(resp){
        window.location.reload();
      }else{
        alert("Las credenciales no existen");
      }
    })
  }
}
