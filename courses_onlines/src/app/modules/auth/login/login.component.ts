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

  //auth-register
  email_register:any = null;
  password_register:any = null;
  name:any = null;
  surname:any = null;
  password_confirmation:any = null;
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

  register(){
    if(!this.email_register || !this.name || !this.surname || !this.password_register || !this.password_confirmation){
      alert("Todos los campos son necesarios");
      return;
    }
    if (this.password_register != this.password_confirmation){
      alert("Las contraseñas son diferentes");
      return;
    }
    let data = {
      email: this.email_register,
      name: this.name,
      surname: this.surname, 
      password: this.password_register,

    }
    this.authServices.register(data).subscribe((resp:any) => {
      console.log(resp);
      alert("El usuario se ha registrado coreectamente ");
    }, error => {
      alert("Las credenciales ingresadas no son correctas o ya existen");
      console.log(error);
    })
  }
}
