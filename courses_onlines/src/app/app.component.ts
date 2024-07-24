import { Component } from '@angular/core';

declare var $:any;
declare function HOMEINIT([]):any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'courses_onlines';

  constructor(){
    setTimeout(() =>{
      HOMEINIT($);
    }, 50);
  }
}
