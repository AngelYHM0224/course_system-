import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  user:any = null;
  constructor(
    public authServices: AuthService,
  ){

  }

  ngOnInit(): void {
    console.log(this.authServices);
    this.user = this.authServices.user;
  }

  logout(){
    this.authServices.logout();
  }
}
